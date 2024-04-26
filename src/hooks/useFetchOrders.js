import { currencyFormatter } from "../helpers/currency-formatter";
import { useEffect, useState } from "react";

export async function fetcher() {
  try {
    const response = await fetch(
      "https://vop4f76uc3.execute-api.us-east-1.amazonaws.com"
    );

    if (!response.ok) {
      return Promise.reject(new Error("fetching error"));
    }

    return (await response.json()) || {};
  } catch (e) {
    return Promise.reject(e);
  }
}

export function useFetchOrders() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetcher();

        setData(response);
      } catch (err) {
        alert(err);
      }
    }

    getData();
  }, []);

  return {
    data: {
      orders: data?.order_entries || [],
      status: data?.status,
      purchase_values: {
        subtotal: currencyFormatter.format(data?.subtotal || 0),
        fee: currencyFormatter.format(data?.payment_fees || 0),
        tax: currencyFormatter.format(data?.payment_tax || 0),
        total: currencyFormatter.format(data?.total || 0),
        payment_status: data?.payment?.status,
      },
      ...data,
    }
  };
}
