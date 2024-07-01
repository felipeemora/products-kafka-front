import { useEffect, useState } from 'react';

export const useFetchProducts = (maxPrice) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [eventSource, setEventSource] = useState(null);

  useEffect(() => {
    setProducts([]);
    setIsLoading(true);

    const es = new EventSource(`http://localhost:8082/elements/${maxPrice}`);
    setEventSource(es);

    es.onmessage = (event) => {
      const newProduct = JSON.parse(event.data);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setIsLoading(false);
    };

    es.onerror = () => {
      if (es.readyState === EventSource.CONNECTING) {
        es.close();
        setIsLoading(false);
        return;
      }
    };

    return () => {
      es.close();
    };
  }, [maxPrice]);

  useEffect(() => {
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [eventSource]);

  return {
    products,
    isLoading
  };
};
