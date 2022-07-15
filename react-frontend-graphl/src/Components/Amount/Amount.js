import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CardIcons from '../../Commons/CardIcons';
import Paragraph from '../../Commons/Paragraph';
import { FaBriefcase, FaDollarSign } from 'react-icons/fa';
import './Amount.css';

const GET_TRANSACTIONS = gql`
  query {
    transactions {
      transactionType
      name
      amount
      sucess
      date
    }
  }
`;

const Amount = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  const groupByAmount = () => {
    const dataByAmount = {};
    //date ->key
    // value -> []
    data?.transactions?.forEach((element) => {
      if (dataByAmount.hasOwnProperty(element.amount)) {
        const currentAmount = element.amount;
        const updatedData = [...dataByAmount[currentAmount], element];
        dataByAmount[element.amount] = updatedData;
      } else {
        dataByAmount[element.amount] = [element];
      }
    });

    return dataByAmount;
  };

  const itemsGroupedByAmount = groupByAmount();
  const onlyAmounts = Object.keys(itemsGroupedByAmount);

  return (
    <div>
      {onlyAmounts.map((amount) => {
        return (
          <div>
            {itemsGroupedByAmount[amount].map((transaction) => {
              return (
                <div className='history-container'>
                  <div className='history-main-content'>
                    <div className='history-content'>
                      <div className='briefcase'>
                        <CardIcons icons={FaBriefcase} className='fa-brief' />
                      </div>
                      <div className='history-title-container'>
                        <Paragraph
                          title={transaction.name}
                          className='history-title-class'
                        />
                      </div>
                    </div>

                    <div className='brand-container'>
                      <div className='fa-card-content'>
                        <Paragraph
                          className='fa-mastercard'
                          title={transaction.transactionType}
                        />
                      </div>

                      <div className='brand-date-container'>
                        <Paragraph
                          className='date-content'
                          title={transaction.date}
                        />
                      </div>
                    </div>

                    <div className='amount-content'>
                      <div className='fa-arrowup'>
                        <CardIcons
                          icons={FaDollarSign}
                          className='fa-arrow-icon'
                        />
                      </div>

                      <div>
                        <Paragraph
                          title={transaction.amount}
                          className='amount-text'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Amount;
