import React, {useState} from 'react';
import {Tab, Tabs} from "@material-ui/core";
import {ImageGrid} from "./ImageGrid";
import {Modal} from "./Modal";

export const RemoveImage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);

  const tabNameToIndex = {
    0: "interiors",
    1: "buildings",
    2: "aerial",
    3: "video"
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        style={{margin: '50px 0 30px 0'}}
        centered
      >
        <Tab label="Інтер'єри"/>
        <Tab label="Нерухомість"/>
        <Tab label="Аерозйомка"/>
        <Tab label="Відеомонтаж"/>
      </Tabs>
      <ImageGrid section={tabNameToIndex[selectedTab]} select={setSelectedImg}/>
      {selectedImg && <Modal image={selectedImg} close={setSelectedImg}/>}
    </>
  )
}
