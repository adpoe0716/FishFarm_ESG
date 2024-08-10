import React from 'react';

export default function Co2() {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    sectionTitle: {
      display: 'inline-block',
      backgroundColor: '#e0f7fa',
      padding: '4px 8px',
      borderRadius: '4px',
      fontWeight: 'bold',
      color: '#005344',
    },
  };

  return (
    <div style={styles.container}>
      <p>
        <span style={styles.sectionTitle}>ESG 是什麼？</span><br/>
        ESG是環境Environmental 、社會Social 和 公司治理 Governance 三個關鍵字的縮寫，ESG投資是一種以企業環境、社會和治理表現當作評鑑基礎的投資方法，在投資回報的同時，促使企業落實社會責任、環境保護以及治理效率。<br/><br/>
        
        <span style={styles.sectionTitle}>ESG三大面向議題：環境、社會、治理</span><br/>
        ESG概念最初被提出，可以回溯到2004年聯合國當時發佈一份《Who Cares Wins》報告，裡面提到ESG適用在企業在投資決策和風險管理流程的評估策略，並且從環境、社會與企業治理的維度中，關注具體能改善跟優化的項目：<br/>
        環境保護（E）面向：ESG評估公司的環境影響和永續性，企業如何管理它們的溫室氣體排放、空氣品質、碳足跡、能源使用、燃料、水資源和廢棄物處理、生物多樣性、產品包裝與物流等服務營運問題。<br/><br/>
        
        社會責任（S）面向：ESG評估公司如何處理利害關係人的權益，包含管理它們的供應鏈、勞資關係、員工健康安全及舒適、多元職場、薪酬福利、招聘和職涯發展、人權、客戶隱私和安全等問題。<br/><br/>
        
        公司治理（G）面向：ESG評估公司的管理和透明度，例如董事會的組成和公司內部審計與監管政策、系統化風險管理、意外與安全管理、商業倫理、政治影響、競爭行為及供應鏈管理。<br/><br/>
        
        <span style={styles.sectionTitle}>ESG 跟 SDGs、CSR有什麼不同？</span><br/><br/>
        他們三個是不同但卻相互關聯的永續關鍵字，個別來看的話：<br/>
        ESG．Environmental, Social, Governance，環境、社會、治理：是指在投資和企業管理中，強調企業在經營過程中考慮對環境、社會和治理的影響，達成永續發展的維度。<br/><br/>
        
        SDGs．Sustainable Development Goals，永續發展目標：是聯合國在2015年制定的17項目標，涵蓋了169項細項目標，期望在2030年實現全球永續。SDGs不只在企業管理和投資，更關注全球社會和環境議題，強調了消除貧窮、減緩氣候變遷、促進性別平權、健康福祉、教育平等、能源轉型、氣候行動等議題。<br/><br/>
        
        CSR．Corporate Social Responsibility，企業社會責任：是企業對社會和環境責任的承擔，它強調企業應該在經營過程中尊重和照顧各方利益相關者，包括員工、顧客、供應商、社區和環境。<br/><br/>
        
        CSR是企業主動承擔的責任，而ESG更像是投資人對企業評鑑的標準，以及達成SDGs永續目標的手段。簡單來講，他們有共同內涵但關注範疇不同，ESG更側重於企業管理和投資，SDGs面向全球永續發展目標的貢獻，而CSR更著重經營過程中對利害關係人的責任承擔。<br/><br/>
        
        <span style={styles.sectionTitle}>漁業與ESG</span><br/><br/>
        何謂藍碳? 在公海上，台灣船隊的捕撈量相當於藍碳消耗第三大國<br/>
        海洋每年約吸納25億噸的碳，佔人類排碳量22%。<br/>
        沿海植被:紅樹林、鹽沼與海草床三者共可儲存超過550億公噸的二氧化碳，超過海洋總儲碳量的50%。<br/>
        國際貨幣基金組織（IMF）2019年報吿指出，每條大型鯨魚平均能儲存33噸二氧化碳。<br/><br/>
        
        鯨魚屍骸分解過程中滋養的浮游植物也是固碳好手。全球浮游植物每年供應世上50%的氧氣，同時也捕捉370億噸的二氧化碳。<br/><br/>
        
        過度捕撈如何令「藍碳」減量？<br/>
        鯨魚與其他大型魚類的銳減，不僅是過度捕撈的後果，也代表人類每年從海裡撈出許多「藍碳」，無疑是暖化的隱形兇手。<br/><br/>
        
        <span style={styles.sectionTitle}>碳足跡</span><br/><br/>
        碳足跡定義:<br/>
        碳足跡（Carbon Footprint）指的是一項活動或產品的整個生命週期中，直接與間接產生的溫室氣體排放量。<br/>
        碳足跡計算是測量和報告建築、土地、結構或零售位置對環境所造成的環境影響的標準方式。<br/><br/>
        
        碳足跡計算:<br/>
        測量的氣體包括CO2(二氧化碳)、CH4(甲烷)、N2O(一氧化二氮)，而能源的碳足跡計算分為直接能源排放以及間接能源排放。<br/><br/>
        
        直接能源排放公式:<br/><br/>
        CO2=(總數量*(CO2排放因數*採暖值)*密度)<br/>
        CH4=((總數量*(CH4排放因數*採暖值)*密度)*GWP CH4 轉換)<br/>
        N2O=((總數量*(N2O排放因數*採暖值)*密度)*GWP CH4轉換)<br/><br/>
        
        間接能源排放公式:<br/><br/>
        CO2=((根據佔用率所使用的總數量*排放因數))<br/>
        CH4=((根據佔用率所使用的總數量*CH4排放因數)*GWP CH4 轉換)<br/>
        N2O=(根據佔用率所使用的總數量*N2O排放因數)*GWP N2O轉換)<br/><br/>
        
        ※ 排放因數:單位容積下，吸收一公升的空氣，排出的碳排放量。<br/>
        ※ 採暖值:此物體可以吸收多少的熱能（瓦特/平方公尺）。<br/>
        ※ GWP(全球暖化潛勢):是衡量溫室氣體對全球暖化影響的一種手段。<br/><br/>
        
        碳足跡計算器:<br/>
        <a href="https://scmp.itri.org.tw/smepass/WebPage/calaprobably.aspx" target="_blank" rel="noopener noreferrer">碳足跡計算器</a><br/><br/>
        
        <span style={styles.sectionTitle}>生活中節能</span><br/><br/>
        減少碳足跡:<br/><br/>
        多吃植物少吃肉:<br/>
        減少養殖畜牧動物造成的環境破壞，以及減少飼養動物產生的甲烷氣體，畜牧業的溫室氣體排放量就佔全球排放量的 18%，比全球運輸業（鐵公路、輪船、飛機⋯等等）的碳排放量加總起來還多。<br/><br/>
        
        多搭乘大眾交通運輸工具:<br/>
        減少大量廢氣產生，避免都市內產生塞車現象導致廢氣排出過多。<br/>
        根據環保署統計，在臺灣，包含飛機、汽車等交通運輸產生的碳排放佔比約為總量的 14%。<br/><br/>
        
        重複利用降低物慾:<br/>
        我們所穿的每一件衣服、所用的每一項物品，在生產、運送的過程中都累積了或多或少的碳足跡。人類的生存活動無可避免地會消耗地球資源與能源，正因如此，我們更應該對手中的物件心懷感激，正確使用每一樣產品，在安全範圍內延長物品的使用壽命，尋找重複利用的可能，為手中的資源，創造最大的效用。<br/><br/>
        
        將不需要的衣物捐出去，購買耐用布料的衣物，省錢的同時也將製造衣物的工業需求減少，產生的碳足跡也就減少了。<br/><br/>
        
        使用節能家電/多使用標示碳足跡標章產品<br/>
        以家中最耗電的冷氣為例，設有節能標章的冷氣在 10 坪大小的房間內全年運轉，比起沒有節能標章的冷氣，平均 1 年可省下 500 - 700 度電，減碳約 300 - 400 公斤。<br/><br/>
        
        購買過程中鼓勵製造商達成減少碳足跡目的。<br/><br/>
        
        拒用塑膠製品:<br/>
        過去 50 年，全球的塑膠產量就增加了 20 多倍，塑膠生產的碳足跡更佔了全球碳排放量的 6%，相當於「全球航空業」的碳排放量。<br/><br/>
        
        關心氣候與能源政策<br/>
        政治之所以存在，是為了管理眾人之事，日常中的節能減碳固然重要，但若能將氣候問題提高至法律層級處理，不但能夠全面地推動改變，更能受惠於法律的強制力而進展更快速。<br/><br/>
        
        學習／傳播氣候新知:<br/>
        1975 年，氣候科學家 Wallace Broecker 首次提出「全球暖化」的說法，他在論文中預測了二氧化碳的排放將導致全球氣溫上升，然而，當時人們卻因氣候變化緩慢又抽象而喪失警覺，與阻止氣候變遷的黃金時機擦肩而過，45 年後的現在，氣候問題已迫在眉睫，我們更應該時時關心環境變化，學習氣候新知，並且努力喚醒更多人一起瞭解氣候變遷將對我們的生活帶來哪些衝擊、我們又能如何以行動來減緩氣候變遷加劇。<br/><br/>
        
        轉用電動車<br/>
        全球環保意識高漲，電動機車、汽車也橫空出世，各家車廠紛紛推出電動車款，電動車化趨勢儼然勢不可擋。<br/><br/>
        
        ◎使用電動車有什麼優點？<br/>
        減少對化石燃料的依賴，降低車輛行進過程中產生的碳排放與空氣污染，電動車減速可回充電力，因此在塞車怠速時能將動能轉為電能。<br/><br/>
        
        親近再生能源<br/>
        雖然使用節能家電、轉用電動車都能幫助我們在日常中減碳，但若以全生命週期來看，任何電器產品在製造、使用甚至回收時都須耗電，而目前臺灣的電力來源仍有約 40% 左右的燃煤發電，持續製造空氣污染並排放二氧化碳。<br/><br/>
        
        換句話說，無論您我在生活中如何想盡辦法減碳，只要源頭發電的方式依然使用化石燃料，達成環境永續目標、減緩氣候變遷就仍有一段長路，需要政府、企業與民間共同努力。<br/><br/>
        
        <span style={styles.sectionTitle}>節能減碳（食衣住行）</span><br/><br/>
        「食」<br/><br/>
        吃本土食物：<br/>
        非本土食物需要從外地運送，進而增加食物的碳足跡，因此建議多吃本土食物。<br/><br/>
        
        吃當季食物：<br/>
        供應非當季食物會增加儲存食物所產生的能量消耗，故吃當季食物是更環保的選擇。<br/><br/>
        
        使用環保餐具：<br/>
        自備環保筷、環保杯，避免使用一次性餐具，可降低垃圾量。<br/><br/>
        
        「衣」<br/><br/>
        戶外晾曬代替烘衣：<br/>
        減少使用烘衣機的頻率，可幫助省電。<br/><br/>
        
        洗衣前先浸泡：<br/>
        洗衣服之前先浸泡20分鐘，有助於污垢釋出，進而減少洗衣用電。<br/><br/>
        
        減少購衣頻率：<br/>
        減少買衣服的頻率，並將不穿的衣服回收或送給需要的人，皆能減少被棄置的衣服，進而降低製造、燃燒衣服產生的碳排放，目前也有相關企業投入二手衣物處理，例如：二拾衫擁有完善的二手衣物處理管道，能將閒置衣物帶入循環體系進行再利用，為地球減少衣物浪費。<br/><br/>
        
        「住」<br/><br/>
        減少紙本浪費：<br/>
        使用電子帳單繳交水電費、雙面用紙或使用再生紙產品（如筆記本、衛生紙），並培養再生衛生紙使用習慣，有助於垃圾減量與降低樹木砍伐數量。<br/><br/>
        
        少吹冷氣：<br/>
        多開窗享受自然風，減少冷媒使用，進而減輕對臭氧層的破壞。<br/><br/>
        
        減少能源浪費：<br/>
        隨手關電源，使用省電燈泡、省電冰箱等節能家電。<br/><br/>
        
        省水：<br/>
        每省一度水能減少0.207公斤碳排放，因此建議以淋浴代替泡澡、使用省水馬桶或水龍頭。此外，洗菜、洗米後的水亦可用於洗車或澆花，充分利用水資源。<br/><br/>
        
        確實做好回收：<br/>
        選擇可重複使用的日常用品，例如環保餐盒、食物袋以及購物袋，可降低垃圾處理時對環境造成的危害，並提高再利用率。<br/><br/>
        
        「行」<br/><br/>
        少開／騎車：<br/>
        多走路、騎腳踏車或搭乘大眾運輸工具。<br/><br/>
        
        選擇環境友善車種：<br/>
        騎乘油電混合車或電動車，能減少騎乘時的碳排放。<br/><br/>
        
        與他人共乘電梯：<br/>
        盡可能與他人共乘電梯、減少電梯使用趟數，達到省電效果。<br/><br/>
        
        梅花肉片300公克<br/><br/>
        計算碳足跡有一公式：碳足跡計算公式（CO2e）：活動強度數據 × 排放係數 × GWP值<br/><br/>
        
        以台糖梅花肉片300克產品為例，碳足跡計算如下：<br/>
        原料階段：豬肉原料用量(kg/pcs)*排放係數<br/>
        =0.3*6.34=1.90164 kgCO2eq/PCS<br/>
        
        製造階段：製程用電(度/pcs)*排放係數<br/>
        =0.27215*0.654=0.177988 kgCO2eq/PCS<br/>
        
        配銷階段：產品重量(噸/pcs)*運輸距離(km)*排放係數<br/>
        =0.000360306*13.9*0.961=0.004812936 kgCO2eq/PCS<br/>
        
        使用階段：冷凍與烹煮耗電量(度/pcs)*排放因數<br/>
        =0.137968551*0.654=0.090231432 kgCO2eq/PCS<br/>
        
        廢棄階段：廢棄焚化包材重量(kg/pcs)*排放因數<br/>
        =0.018*0.606=0.0108 kgCO2eq/PCS
      </p>
    </div>
  );
}
