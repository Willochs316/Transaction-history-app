import React from 'react';
import { gql, useQuery } from '@apollo/client';
import CardIcons from '../../Commons/CardIcons';
import Paragraph from '../../Commons/Paragraph';
import { FaBriefcase, FaDollarSign } from 'react-icons/fa';
import './Date.css';

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

const Date = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  const groupByDate = () => {
    const dataByDate = {};
    //date ->key
    // value -> []
    data?.transactions?.forEach((element) => {
      if (dataByDate.hasOwnProperty(element.date)) {
        const currentDate = element.date;
        const updatedData = [...dataByDate[currentDate], element];
        dataByDate[element.date] = updatedData;
      } else {
        dataByDate[element.date] = [element];
      }
    });

    return dataByDate;
  };

  const itemsGroupedByDate = groupByDate();
  const onlyDates = Object.keys(itemsGroupedByDate);

  return (
    <div>
   
      {onlyDates.map((date) => {
        return (
          <div>
            {itemsGroupedByDate[date].map((transaction) => {
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

export default Date;
