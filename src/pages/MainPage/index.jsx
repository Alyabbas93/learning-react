import React, { useState } from "react";
import Card from "../../components/components/Card";
import { arr1, arr2, arr3 } from "../../components/components/Card/arrays";

function MainPage() {
  const [box1Data, setBox1Data] = useState(arr1);
  const [box2Data, setBox2Data] = useState(arr2);
  const [box3Data, setBox3Data] = useState(arr3);

  const nextData = (info) => {
    if (box1Data.some((item) => item.id === info.id)) {
      setBox1Data(box1Data.filter((item) => item.id !== info.id));
      setBox2Data([...box2Data, info]);
    } else if (box2Data.some((item) => item.id === info.id)) {
      setBox2Data(box2Data.filter((item) => item.id !== info.id));
      setBox3Data([...box3Data, info]);
    }
  };

  const previousData = (info) => {
    if (box2Data.some((item) => item.id === info.id)) {
      setBox2Data(box2Data.filter((item) => item.id !== info.id));
      setBox1Data([...box1Data, info]);
    } else if (box3Data.some((item) => item.id === info.id)) {
      setBox3Data(box3Data.filter((item) => item.id !== info.id));
      setBox2Data([...box2Data, info]);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%"  
  }}>
      <Card data={box1Data} nextData={nextData} previousData={previousData} />
      <Card data={box2Data} nextData={nextData} previousData={previousData} />
      <Card data={box3Data} nextData={nextData} previousData={previousData} />
    </div>
  );
}

export default MainPage;