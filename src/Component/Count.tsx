import CountStore from "@/store/CountStore";
import { inject, observer } from "mobx-react";
import React from "react";

interface CountProps {
  store?: StoreType;
}

interface StoreType {
  CountStore: CountStore;
}

const Count = inject("store")(
  observer(({ store }: CountProps) => {
    const { count, handleCount } = store!.CountStore;

    return <div>{count}</div>;
  })
);

export default Count;