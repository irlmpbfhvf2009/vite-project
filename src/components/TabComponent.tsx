import { useState } from 'react';
import md5 from 'md5'; // 假設你使用 md5 庫來進行 MD5 加密
import './TabComponent.css'

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('md5'); // 初始選項卡設為 md5
  const [inputText, setInputText] = useState('');

  // MD5加密處理
  const handleMd5 = (text: string) => {
    return md5(text);
  };

  // 自動移除空格和換行
  const handleRemoveSpacesAndLines = (text: string) => {
    return text.replace(/\s+/g, '');
  };

  return (
    <div className="tabs">
      <div className="tabs-h">
        <button 
          className={activeTab === 'md5' ? 'active' : ''}
          onClick={() => setActiveTab('md5')}
        >
          MD5 加密
        </button>
        <button 
          className={activeTab === 'removeSpaces' ? 'active' : ''}
          onClick={() => setActiveTab('removeSpaces')}
        >
          自動移除文字空格及換行工具
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'md5' && (
          <div className='md5'>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="輸入文字進行 MD5 加密"
            />
            <div className='it'>
              <div><p>32位[大] </p><input type="text" value={handleMd5(inputText)} /></div>
              
              <p>32位[小] </p><input type="text" value={handleMd5(inputText)} />
            </div>
            
            </div>
        )}

        {activeTab === 'removeSpaces' && (
          <div className='rms'>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="輸入文字移除空格和換行"
            />
            <p>處理結果: {handleRemoveSpacesAndLines(inputText)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
