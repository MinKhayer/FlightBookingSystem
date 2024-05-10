import React, { useEffect, useState } from "react";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";

const UserTransaction = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const [userTransaction, setUserTransaction] = useState([]);

  useEffect(() => {
    axiosPrivateUrl
      .get(`api/transaction/user`)
      .then((response) => {
        // console.log(response?.data);
        setUserTransaction(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosPrivateUrl]);

  //! Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth();
    const day = date.getDay();
    const year = date.getFullYear();
    const modifiedDateFormat = `${day}-${month}-${year}`;
    return modifiedDateFormat;
  };

  // console.log(userTransaction);

  return (
    <div className="UserTransactionContainer">
      <div className="UserTransactionWrapper flex flex-col justify-center items-center  ">
        {/* transaction card starts  */}

        <div className="transactionCard  airlineListCard bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300   ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            All transaction
          </h1>

          {/* list container starts  */}
          <div className="listrContainer overflow-x-auto shadow-md sm:rounded-lg">
            {/* tablle starts  */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
              {/* table head starts  */}
              <thead className=" text-center text-xs text-gray-900 uppercase bg-gray-200 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction Method
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction Date
                  </th>
                </tr>
              </thead>
              {/* table head ends  */}

              {/* table body starts  */}
              <tbody>
                {userTransaction &&
                  userTransaction?.map((transaction, ind) => {
                    return (
                      <tr
                        key={ind}
                        className="text-center bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">
                          {" "}
                          {transaction?.amount} {transaction?.currency}{" "}
                        </td>
                        <td className="px-6 py-4"> {transaction?.trx} </td>
                        <td className="px-6 py-4">
                          {transaction?.card_issuer}
                        </td>
                        {/* <td className="px-6 py-4">{transaction?.createdAt}</td> */}
                        <td className="px-6 py-4">
                          {formatDate(transaction?.createdAt)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
              {/* table body ends  */}
            </table>
            {/* tablle ends  */}
          </div>
          {/* list container ends  */}
        </div>

        {/* transaction card ends  */}
      </div>
    </div>
  );
};

export default UserTransaction;
