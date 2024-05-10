import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";

const Success = () => {
  const location = useLocation();
  const [transactionId, setTransactionId] = useState(null);
  const [transactionData, setTransactionData] = useState(null);

  const { axiosPrivateUrl } = UseAxiosPrivate();

  //   /api/transaction/:id

  //! effect to get transaction id
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const trx = searchParams.get("trx");

    if (trx) {
      //   console.log("trx:", trx);
      setTransactionId(trx);
      axiosPrivateUrl
        .get(`/api/transaction/${trx}`)
        .then((response) => {
          //   console.log(response?.data);
          setTransactionData(response?.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [location.search, axiosPrivateUrl]);

  //   console.log(transactionId);

  console.log(transactionData);

  return (
    <div className="cardContainer  ">
      <div className="cardWrapper bg-gray-50 min-h-screen flex justify-center items-center  ">
        {transactionData && (
          <div className="cardDetails bg-gray-100 rounded-md shadow-md border border-gray-200 py-4 px-6  ">
            <h1 className=" text-3xl font-semibold mb-6 text-center ">
              Payment Successful
            </h1>

            {/* details starts  */}
            <div className="detailData my-10 text-lg ">
              <h1>
                {" "}
                <span className=" font-medium "> Amount :</span>{" "}
                {transactionData?.amount} {transactionData?.currency}
              </h1>
              <h1>
                <span className=" font-medium "> transaction id :</span>{" "}
                {transactionData?.bank_tran_id}
              </h1>
              <h1>
                {" "}
                <span className=" font-medium "> payyment method :</span>{" "}
                {transactionData?.card_issuer}
              </h1>
            </div>
            {/* details ends  */}

            <Link
              to={"/"}
              className=" mt-8 primaryBg  py-2 px-6 rounded-md text-gray-50 font-medium "
            >
              {" "}
              Go to Home page{" "}
            </Link>
          </div>
        )}
        {/* card details  */}

        {/* card details  */}
      </div>
    </div>
  );
};

export default Success;
