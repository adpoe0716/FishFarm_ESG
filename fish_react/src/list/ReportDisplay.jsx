import React, { useState } from 'react';
import './ReportDisplay.css';

const ReportDisplay = () => {
  return (
    <div className="report-container">
      {(
        <div className="report-content">
          <h1>雲林永續魚塭年度報告書</h1>

          <h2>1. 引言與公司概況</h2>
          <p><strong>魚塭名稱:</strong> 雲林永續魚塭</p>
          <p><strong>魚塭位置:</strong> 台灣雲林縣</p>
          <p><strong>魚塭面積:</strong> 25000平方米</p>
          <p><strong>主要養殖魚種:</strong> 虱目魚、草蝦、文蛤</p>
          <p><strong>年產量目標:</strong> 150噸</p>
          <p><strong>經營理念:</strong> 我們致力於提供高品質的水產品，同時減少對環境的負面影響。我們承諾在養殖過程中採用環保技術，推動資源的有效利用，並保護當地生態系統。</p>

          <h2>2. 環境影響管理</h2>
          <p><strong>平均水質監測數據:</strong></p>
          <ul>
            <li>pH值: 7.5</li>
            <li>溶氧量: 6.8 mg/L</li>
          </ul>
          <p><strong>廢水排放量:</strong> 1200立方米</p>
          <p><strong>化學品使用情況:</strong></p>
          <ul>
            <li>氯化鈉: 500公斤</li>
            <li>硫酸銅: 200公斤</li>
          </ul>
          <p><strong>能源使用量:</strong> 45000 kWh</p>
          <p><strong>碳排放量:</strong> 30噸CO2e</p>

          <h2>3. 資源使用效率</h2>
          <p><strong>水資源使用量:</strong> 50000立方米</p>
          <p><strong>水資源節約措施:</strong> 我們採用循環水系統，減少水資源的浪費，並通過定期檢查和維護管道系統來防止漏水。</p>
          <p><strong>飼料轉化率:</strong> 1.5公斤飼料/公斤魚</p>
          <p><strong>飼料來源:</strong> 我們的飼料來自經認證的可持續性來源，確保不對環境造成過度壓力。</p>
          <p><strong>能源使用效率:</strong> 我們安裝了高效能的水泵和照明系統，並定期進行設備維護以確保能源的高效使用。</p>
          <p><strong>魚類健康數據:</strong></p>
          <ul>
            <li>疾病控制: 每月進行一次健康檢查</li>
            <li>死亡率: 2%</li>
          </ul>

          <h2>4. 生物多樣性與生態保護</h2>
          <p><strong>周邊環境保護措施:</strong> 我們在魚塭周圍種植了大量的植被，並設立了濕地保護區，以維護當地的生態平衡。</p>
          <p><strong>生態系統監測數據:</strong> 我們定期監測魚塭內的水質和生物多樣性，確保生態系統的健康。</p>
          <p><strong>外來物種管理:</strong> 我們嚴格控制外來物種的引入，並設立隔離區以防止外來物種對本地生態系統的影響。</p>

          <h2>5. 勞工與社會責任</h2>
          <p><strong>員工總數:</strong> 12人（全職: 8人，兼職: 4人）</p>
          <p><strong>員工性別比例:</strong> 男性: 60%，女性: 40%</p>
          <p><strong>員工薪資與福利:</strong> 我們提供具有競爭力的薪資，並為員工提供健康保險、退休金計劃和年度獎金。</p>
          <p><strong>安全事故記錄:</strong> 年度內發生了2起輕微的安全事故，均已妥善處理，無重大傷害。</p>
          <p><strong>員工培訓計劃:</strong> 我們每年為員工提供專業技能培訓和安全培訓，並鼓勵員工參加外部培訓課程以提升自身能力。</p>
          <p><strong>社區貢獻:</strong> 我們積極參與當地社區活動，提供就業機會，並定期舉辦慈善活動，支持當地學校和社區建設。</p>

          <h2>6. 財務與風險管理</h2>
          <p><strong>年度收入:</strong> 3000萬新台幣</p>
          <p><strong>年度成本:</strong> 2000萬新台幣</p>
          <p><strong>利潤:</strong> 1000萬新台幣</p>
          <p><strong>市場風險應對措施:</strong> 我們通過市場分析和價格預測來管理市場波動，並建立了穩定的供應鏈以確保原材料的穩定供應。</p>
          <p><strong>氣候風險應對措施:</strong> 我們採取了多種措施來應對氣候變化，包括建設防洪設施和加強魚塭的結構，以防範極端天氣對養殖的影響。</p>

          <h2>結語</h2>
          <p>雲林永續魚塭致力於在提供高品質水產品的同時，實現環境保護和社會責任的雙重目標。我們將繼續努力，推動可持續發展，為未來創造更美好的環境。</p>
        </div>
      )}
    </div>
  );
};

export default ReportDisplay;
