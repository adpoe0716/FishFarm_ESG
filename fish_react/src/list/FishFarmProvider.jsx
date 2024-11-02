import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// 創建上下文
export const FishFarmContext = createContext();

// 創建 Provider 組件，包裹應用中的其他組件，並將數據提供給這些組件
export const FishFarmProvider = ({ children }) => {
  const [fishPonds, setFishPonds] = useState([]);
  const [fishFarmData, setFishFarmData] = useState([]);

  // 第一個 API 調用：取得使用者魚塭資料
  const fetchUserFishPonds = async (currentUser_id) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user_fishfarm", {
        user: currentUser_id,
      });

      if (response) {
        const parsedData = response.data
          .map((item) => {
            try {
              return JSON.parse(item);
            } catch (e) {
              console.error("Failed to parse item:", item);
              return null;
            }
          })
          .filter((item) => item !== null);

        setFishPonds(parsedData);
      }
    } catch (error) {
      console.error("Error fetching fish farm data:", error);
    }
  };

  // 第二個 API 調用：取得魚塭的具體資料
  const fetchFishFarmData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/fishfarm_data");
      setFishFarmData(response.data);
    } catch (error) {
      console.error("Error fetching fish farm detailed data:", error);
    }
  };

  return (
    <FishFarmContext.Provider
      value={{
        fishPonds,
        fishFarmData,
        fetchUserFishPonds,
        fetchFishFarmData,
      }}
    >
      {children}
    </FishFarmContext.Provider>
  );
};
