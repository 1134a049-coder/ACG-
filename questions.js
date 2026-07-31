const questionBank = [
  {
    "id": 1,
    "set": 1,
    "original_num": 1,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "HELLO, WORLD!",
      "B": "Hello, world!",
      "C": "Hello, WORLD!",
      "D": "hello, World!"
    },
    "answer": "A",
    "option_exps": {
      "A": "upper() 把 字 串 裡 的 英 文 字 母 全 部 轉 成 大 寫 ， 數 字 、 標 點 、 空 白 都 不 受 影 響 。",
      "B": "(D) 仍 保 留 小 寫 字 母  →  與  upper() 的 結 果 矛 盾 。",
      "C": "只 有 部 分 字 母 大 寫  →  同 樣 不 可 能 。"
    },
    "explanation": "• 原 字 串 轉 大 寫 後 即 為 「 HELLO, WORLD! 」 ， 對 應  (A) 。\n• 解 題 技 巧 ： 看 到  upper() ， 凡 選 項 出 現 小 寫 字 母 一 律 先 刪 。",
    "category": "python",
    "question_img": "圖片/python/q1_question.png"
  },
  {
    "id": 2,
    "set": 1,
    "original_num": 2,
    "question": "當 運 算 所 得 到 的 數 值 超 出 該 型 別 所 能 表 示 的 範 圍 ， 系 統 會 丟 出 何 種 例 外 ？",
    "options": {
      "A": "OverflowError",
      "B": "IndexError",
      "C": "TypeError",
      "D": "SystemError"
    },
    "answer": "A",
    "option_exps": {
      "A": "數 值 運 算 結 果 超 出 該 型 別 可 表 示 的 範 圍 時 ， 丟 出 的 是  OverflowError （ 溢 位 ） 。",
      "B": "IndexError 是 索 引 超 出 序 列 長 度 才 發 生 。",
      "C": "TypeError 是 型 別 不 符 （ 如  str + int ） 。",
      "D": "SystemError 指 直 譯 器 內 部 錯 誤 ， 與 數 值 無 關 。"
    },
    "explanation": "• 解 題 技 巧 ： 題 幹 關 鍵 字 「 超 出 範 圍 ／ 溢 位 」 直 接 對 應 字 面 的  Overflow 。",
    "category": "python"
  },
  {
    "id": 3,
    "set": 1,
    "original_num": 3,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1.0",
      "B": "6",
      "C": "6.0",
      "D": "1"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0-4 仍 是 浮 點 數 ， 結 果 為  1.0 →  對 應  (A) 。",
      "B": "6 、 (C) 6.0 ： 把  x-2*2 誤 算 成 加 法 或 忽 略 乘 法  →  錯 。",
      "D": "1 ： 只 要 參 與 運 算 的 是 浮 點 數 ， 結 果 就 會 帶  .0 ， 不 會 是 整 數  1 。"
    },
    "explanation": "• x=5.00 是 浮 點 數  5.0 ； 運 算 順 序 先 乘 除 後 加 減 ， 2*2=4 。\n• 解 題 技 巧 ： 算 式 中 只 要 有 一 個 浮 點 數 ， 整 個 結 果 都 變 浮 點 數 。",
    "category": "python",
    "question_img": "圖片/python/q3_question.png"
  },
  {
    "id": 4,
    "set": 1,
    "original_num": 4,
    "question": "請 問 運 算 式  5*2.0 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "10.0",
      "B": "10",
      "C": "10.000000",
      "D": "1e1"
    },
    "answer": "A",
    "option_exps": {
      "A": "運 算 式 中 只 要 有 一 個 運 算 元 是  float ， 結 果 就 會 是  float ， 故  5*2.0 = 10.0 。",
      "B": "10 是 整 數 的 顯 示 ， 但 此 處 結 果 其 實 是 浮 點 數 。",
      "C": "10.000000 不 是  Python 預 設 的 浮 點 顯 示 格 式 。",
      "D": "1e1 是 科 學 記 號 寫 法 ， print 不 會 自 動 這 樣 輸 出 。"
    },
    "explanation": "• 解 題 技 巧 ： int 與  float 混 合 運 算 ， 結 果 型 別 必 為  float 。",
    "category": "python"
  },
  {
    "id": 5,
    "set": 1,
    "original_num": 5,
    "question": "有 關  Python 變 數 命 名 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "變 數 名 稱 第 一 個 字 元 可 以 是 數 字",
      "B": "不 能 使 用 空 白 字 元",
      "C": "變 數 名 稱 支 援 中 文",
      "D": "不 能 使 用 Python 內 建 的 保 留 字"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 第 一 個 字 元 不 能 是 數 字 ， 只 能 是 字 母 或 底 線  →  此 敘 述 錯 誤 ， 即 正 解 。",
      "B": "變 數 名 稱 中 間 不 能 有 空 白  →  正 確 敘 述 。",
      "C": "Python3 採  Unicode ， 變 數 名 稱 可 用 中 文  →  正 確 敘 述 。",
      "D": "保 留 字 （ 如  if 、 for ） 不 能 當 變 數 名  →  正 確 敘 述 。"
    },
    "explanation": "• 本 題 問 「 有 誤 」 的 敘 述 ； Python 變 數 命 名 規 則 須 逐 項 檢 查 。",
    "category": "python"
  },
  {
    "id": 6,
    "set": 1,
    "original_num": 6,
    "question": "關 於  Python 程 式 語 言 的 註 解 ， 下 列 何 者 才 是 正 確 的 作 法 ？",
    "options": {
      "A": "將 註 解 放 在 任 何 一 行 的  # 符 號 之 後",
      "B": "將 註 解 放 在 第 一 行 程 式 碼 之 前 ， 用 空 白 行 隔 開",
      "C": "將 註 解 放 在 任 何 一 行 的  /* 和  */ 符 號 之 間",
      "D": "將 註 解 放 在 任 何 一 行 的  // 符 號 之 後"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) # 之 後 到 行 尾 都 是 註 解 ， 可 放 在 任 一 行  →  正 確 。",
      "B": "註 解 不 一 定 要 放 第 一 行 之 前 ， 這 只 是 其 中 一 種 寫 法 、 非 規 則 。",
      "C": "/* */ 是  C/Java 的 區 塊 註 解 ， Python 不 支 援 。",
      "D": "// 是  C/Java 的 單 行 註 解 ， Python 中  // 是 整 數 除 法 。"
    },
    "explanation": "• 本 題 問 「 正 確 」 的 註 解 作 法 ； Python 用  # 做 單 行 註 解 。\n• 解 題 技 巧 ： Python 只 有  # 一 種 註 解 符 號 ， 看 到  /* */ 或  // 一 律 刪 。",
    "category": "python"
  },
  {
    "id": 7,
    "set": 1,
    "original_num": 7,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "2.0",
      "B": "2",
      "C": "2.5",
      "D": "5.2"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0//2=2.0 ： 整 除 結 果 向 下 取 整 ， 但 有 浮 點 數 參 與 故 仍 帶 小 數  →  (A) 。",
      "B": "2 ： 整 除 沒 錯 ， 但 浮 點 數 運 算 結 果 會 是  2.0 而 非 整 數  2 。",
      "C": "2.5 ： 那 是 一 般 除 法  / 的 結 果 ， // 會 丟 掉 小 數 部 分 。",
      "D": "5.2 ： 與 運 算 無 關 的 數 字  →  錯 。"
    },
    "explanation": "• x=5.0 是 浮 點 數 ； x//=2 等 同  x = x // 2 ， // 是 整 除 （ 向 下 取 整 ） 。",
    "category": "python",
    "question_img": "圖片/python/q7_question.png"
  },
  {
    "id": 8,
    "set": 1,
    "original_num": 8,
    "question": "請 問 運 算 式  8**(1/3) 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "2.0",
      "B": "2.7",
      "C": "3",
      "D": "64"
    },
    "answer": "A",
    "option_exps": {
      "A": "指 數  1/3 為 浮 點 數 ， 結 果 是 浮 點 數  2.0 →  對 應  (A) 。",
      "B": "2.7 ： 浮 點 誤 差 下 也 很 接 近  2.0 ， 不 會 是  2.7 。",
      "C": "3 ： 3 是  8 的 什 麼 根 都 不 是 ， 且  ** 結 果 帶 浮 點 。",
      "D": "64 ： 那 是  8**2 的 結 果 ， 與 本 題 指 數 不 符 。"
    },
    "explanation": "• 8**(1/3) 是 求  8 的  1/3 次 方 ， 即  8 的 立 方 根 。\n• 解 題 技 巧 ： x**(1/n) 即 開  n 次 方 ， 且 結 果 為 浮 點 數 。",
    "category": "python"
  },
  {
    "id": 9,
    "set": 1,
    "original_num": 9,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "True",
      "C": "0",
      "D": "1"
    },
    "answer": "A",
    "option_exps": {
      "A": "不 同 型 態 （ int 與  str ） 內 容 不 相 等 ， == 回 傳  False →  (A) 。",
      "B": "True ： 整 數 與 字 串 永 遠 不 相 等 ， 不 可 能 為  True 。",
      "C": "0 、 (D) 1 ： == 的 結 果 是 布 林 值  True/False ， 不 是  0/1 。"
    },
    "explanation": "• x=5 是 整 數 ； x=='5' 比 較 的 是 整 數  5 與 字 串  '5' 。\n• 解 題 技 巧 ： 數 字 與 引 號 字 串 比 較  == ， 型 態 不 同 必 為  False 。",
    "category": "python",
    "question_img": "圖片/python/q9_question.png"
  },
  {
    "id": 10,
    "set": 1,
    "original_num": 10,
    "question": "你 需 要 產 生 隨 機 浮 點 數  n ， 0.0<n<1.0 ， 你 應 該 使 用 哪 個 語 法 ？",
    "options": {
      "A": "random.random()",
      "B": "random.randrange(0.0,1.0)",
      "C": "random.randrange()",
      "D": "random.randint(0,1)"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) random.random() 正 是 回 傳  [0.0, 1.0) 區 間 的 隨 機 浮 點 數  →  正 解 。",
      "B": "randrange 只 接 受 整 數 參 數 ， 傳 浮 點 數 會 出 錯 。",
      "C": "randrange() 缺 少 必 要 參 數 ， 無 法 執 行 。",
      "D": "randint(0,1) 回 傳 整 數  0 或  1 ， 不 是 浮 點 數 。"
    },
    "explanation": "• 需 求 是  0.0<n<1.0 的 隨 機 浮 點 數 ， 應 用  random 模 組 對 應 函 式 。\n• 解 題 技 巧 ： 要  0~1 之 間 的 隨 機 小 數 ， 直 接 用  random.random() 。",
    "category": "python"
  },
  {
    "id": 11,
    "set": 1,
    "original_num": 11,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "4.0",
      "B": "4",
      "C": "41",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0-1=4.0 ： 有 浮 點 數 參 與 ， 結 果 仍 是 浮 點 數  4.0 →  (A) 。",
      "B": "4 ： 整 數  4 缺 了 小 數 ， 浮 點 運 算 不 會 變 回 整 數 。",
      "C": "41 ： 把 減 法 誤 當 字 串 串 接  →  錯 。",
      "D": "error ： 5.0-1 是 合 法 運 算 ， 不 會 出 錯 。"
    },
    "explanation": "• x=5.0 是 浮 點 數 ； x-=1 等 同  x = x - 1 。",
    "category": "python",
    "question_img": "圖片/python/q11_question.png"
  },
  {
    "id": 12,
    "set": 1,
    "original_num": 12,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "3.0",
      "B": "9.0",
      "C": "3",
      "D": "4.500000"
    },
    "answer": "A",
    "option_exps": {
      "A": "指 數  0.5 為 浮 點 數 ， 9 的 平 方 根 為  3.0 （ 浮 點 數 ） →  對 應  (A) 。",
      "B": "9.0 ： 那 是  x 本 身 轉 浮 點 ， 不 是 開 根 號 後 的 值 。",
      "C": "3 ： 開 根 號 結 果 帶 浮 點 ， 會 是  3.0 而 非 整 數  3 。",
      "D": "4.500000 ： 把  9*0.5 誤 算 成 乘 法  →  錯 。"
    },
    "explanation": "• x=9 是 整 數 ； x**0.5 是  9 的  0.5 次 方 ， 即 開 平 方 根 。\n• 解 題 技 巧 ： x**0.5 即 開 平 方 根 ， 且 結 果 為 浮 點 數 。",
    "category": "python",
    "question_img": "圖片/python/q12_question.png"
  },
  {
    "id": 13,
    "set": 1,
    "original_num": 13,
    "question": "底 下  Python 程 式 碼 的 註 解 ， 下 列 何 者 是 正 確 的 ？",
    "options": {
      "A": "B",
      "B": "",
      "C": "",
      "D": ""
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 用  # 且 註 解 正 確 縮 排 在 函 式 內 ， 說 明 函 式 用 途  →  正 確 寫 法 。",
      "C": "/* ... */ 是  C ／ Java 的 註 解 語 法 ， Python 不 支 援  →  直 接 排 除 。",
      "D": "整 行 中 文 沒 有  # 符 號 ， 會 被 當 程 式 碼 執 行 而 報 錯 。",
      "B": "雖 也 用  # ， 但 寫 在 函 式 定 義 之 外 、 未 對 齊 主 體 ， 不 符 標 註 此 函 式 的 情 境 。"
    },
    "explanation": "• Python 的 單 行 註 解 符 號 是  # 。",
    "category": "python",
    "options_are_images": true
  },
  {
    "id": 14,
    "set": 1,
    "original_num": 14,
    "question": "你 想 寫 一 支  Python 程 式 ， 統 計 自 己 存 錢 的 績 效 。 需 要 計 算 儲 存 總 金 額 和 列 印 為 自 己 打 氣 的 話 ， 你 已 經 編 寫 了 以 下 的 程 式\n碼 ， 其 中 包 含 的 行 號 只 是 做 為 參 考 ， 若 要 完 成 這 個 程 式 ， 應 該 在  03 行 使 用 哪 個 程 式 碼 ？",
    "options": {
      "A": "print(\" 恭 賀 你 已 經 增 加 了  \" + str(int(today)-int(first))+ \" 元 \")",
      "B": "print(\" 恭 賀 你 已 經 增 加 了  \" + int(today)-int(first)+ \" 元 \")",
      "C": "print(\" 恭 賀 你 已 經 增 加 了  \" + int(today-first)+ \" 元 \")",
      "D": "print(\" 恭 賀 你 已 經 增 加 了  \" + str(today-first)+ \" 元 \")"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) str(int(today)-int(first)) ： 先 轉 數 字 相 減 、 再 轉 字 串 串 接  →  完 全 正 確 。",
      "B": "int(today)-int(first) 是 整 數 ， 用  + 接 字 串 會  TypeError 。",
      "C": "int(today-first) ： today 、 first 是 字 串 ， 字 串 相 減 本 身 就 出 錯 。",
      "D": "str(today-first) ： 同 樣 是 字 串 相 減  →  錯 誤 。"
    },
    "explanation": "• input() 取 得 的 是 字 串 ： 要 相 減 須 先  int() 轉 數 字 ， 串 接 到 字 串 時 又 要 用  str() 轉 回 。",
    "category": "python",
    "question_img": "圖片/python/q14_question.png"
  },
  {
    "id": 15,
    "set": 1,
    "original_num": 15,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "3.0",
      "B": "3",
      "C": "3.000000",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "有 浮 點 數 參 與 運 算 ， 整 數 會 被 提 升 為 浮 點 ， 結 果 為  3.0 →  (A) 。",
      "B": "3 ： 浮 點 數 相 加 結 果 會 帶  .0 ， 不 會 是 純 整 數  3 。",
      "C": "3.000000 ： Python 印 出 浮 點 數 預 設 為  3.0 ， 不 會 補 滿 小 數 位 。",
      "D": "error ： 1.0+2 是 合 法 的 數 值 運 算 ， 不 會 出 錯 。"
    },
    "explanation": "• 1.0+2 是 浮 點 數  1.0 加 整 數  2 。",
    "category": "python",
    "question_img": "圖片/python/q15_question.png"
  },
  {
    "id": 16,
    "set": 1,
    "original_num": 16,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "True",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "option_exps": {
      "A": "字 串 比 較 區 分 大 小 寫 ， 'A' 與  'a' 不 相 等 ， 回 傳  False →  (A) 。",
      "B": "True ： 大 小 寫 不 同 的 字 元 不 相 等 ， 不 會 是  True 。",
      "C": "1 、 (D) 0 ： == 的 結 果 是 布 林 值  True/False ， 不 是  1/0 。"
    },
    "explanation": "• x='A' 是 字 串 ； x=='a' 比 較 大 寫  'A' 與 小 寫  'a' 。\n• 解 題 技 巧 ： 字 串  == 比 較 大 小 寫 敏 感 ， 'A' 與  'a' 視 為 不 同 。",
    "category": "python",
    "question_img": "圖片/python/q16_question.png"
  },
  {
    "id": 17,
    "set": 1,
    "original_num": 17,
    "question": "下 列 有 關 運 算 子 與 運 算 式 的 描 述 ， 何 者 有 誤 ？",
    "options": {
      "A": "「 / 」 與 「 % 」 都 是 除 法 運 算 子 ， 「 / 」 會 有 浮 點 數 ； 「 % 」 會 將 除 法 結 果 的 小\n數 部 分 去 掉",
      "B": "運 算 式 是 由 運 算 子 （ Operator ） 與 運 算 元 （ Operand ） 所 組 成",
      "C": "運 算 子 如 果 只 有 一 個 運 算 元 則 稱 為 「 一 元 運 算 子 」",
      "D": "運 算 式 運 算 結 果 的 資 料 型 態 將 以 運 算 元 中 資 料 型 態 最 大 的 變 數 為 主"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 描 述 錯 誤 ： % 是 取 餘 數 （ 回 傳 除 法 的 餘 數 ） ， 不 是 去 掉 小 數  →  即 正 解 。",
      "B": "運 算 式 由 運 算 子 與 運 算 元 組 成  →  正 確 。",
      "C": "只 有 一 個 運 算 元 的 稱 一 元 運 算 子 （ 如  -x ） →  正 確 。",
      "D": "混 合 型 態 運 算 結 果 以 最 大 型 態 為 主 （ 如  int+float → float ） →  正 確 。"
    },
    "explanation": "• 本 題 問 「 有 誤 」 的 描 述 ； 逐 項 檢 視 運 算 子 與 運 算 式 概 念 。\n• 去 掉 小 數 部 分 的 是  // 整 除 ， % 取 的 是 餘 數 ， 兩 者 不 可 混 淆 。",
    "category": "python"
  },
  {
    "id": 18,
    "set": 1,
    "original_num": 18,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "2.5",
      "B": "2",
      "C": "3",
      "D": "2.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "5/2 即 使 能 整 除 也 回 傳 浮 點 數 ， 算 出  2.5 →  對 應  (A) 。",
      "B": "(C) 是 整 數  2 、 3 ， 但 「 / 」 不 會 回 傳 整 數 型 別 。",
      "D": "2.0 是  5/2 取 整 的 錯 誤 想 法  →  「 / 」 不 會 捨 棄 小 數 。"
    },
    "explanation": "• 在  Python 中 單 斜 線 「 / 」 是 「 真 除 法 」 ， 結 果 一 律 是 浮 點 數 。\n• 解 題 技 巧 ： 看 到 單 斜 線 「 / 」 結 果 必 為 浮 點 數 ， 且 保 留 小 數 。",
    "category": "python",
    "question_img": "圖片/python/q18_question.png"
  },
  {
    "id": 19,
    "set": 1,
    "original_num": 19,
    "question": "請 問  Python 指 令  x=5.0; x**=2; print(x) 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "25.0",
      "B": "5.0",
      "C": "2.5",
      "D": "0.5"
    },
    "answer": "A",
    "option_exps": {
      "A": "x=5.0 ， 5.0 的 平 方 為  25.0 ； 浮 點 數 運 算 結 果 仍 是 浮 點 數  →  (A) 。",
      "B": "5.0 是 原 值 ， 沒 做 平 方 。",
      "C": "2.5 像 是  5/2 ， 與 次 方 無 關 。",
      "D": "0.5 像 是  1/x 之 類 ， 皆 非 平 方 結 果 。"
    },
    "explanation": "• 「 **= 」 是 次 方 複 合 指 派 ， 等 同 於  x = x ** 2 。\n• 解 題 技 巧 ： x**=2 就 是 把  x 自 乘 一 次 （ 平 方 ） 。",
    "category": "python"
  },
  {
    "id": 20,
    "set": 1,
    "original_num": 20,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "4.0",
      "B": "1.5",
      "C": "1",
      "D": "1.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "2/2=1.0 ， x=5.00 為 浮 點 ， 5.0-1.0=4.0 →  對 應  (A) 。",
      "B": "1.5 是 把 式 子 誤 算 成  (x-2)/2 之 類 。",
      "C": "1 把 結 果 當 整 數 ， 型 別 與 值 都 不 對 。",
      "D": "1.0 只 算 了  2/2 ， 漏 掉 前 面 的  x 。"
    },
    "explanation": "• 依 運 算 優 先 序 ， 先 算 除 法  2/2 再 做 減 法 ； 「 / 」 回 傳 浮 點 數 。\n• 解 題 技 巧 ： 先 乘 除 後 加 減 ， 且 只 要 有 「 / 」 結 果 就 是 浮 點 數 。",
    "category": "python",
    "question_img": "圖片/python/q20_question.png"
  },
  {
    "id": 21,
    "set": 1,
    "original_num": 21,
    "question": "要 將 數 值 轉 為 整 數 ， 使 用 哪 一 個 函 式 ？",
    "options": {
      "A": "int()",
      "B": "count()",
      "C": "float()",
      "D": "decimal()"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) int() 可 把 字 串 或 浮 點 數 轉 成 整 數  →  正 確 。",
      "B": "count() 是 計 算 出 現 次 數 的 方 法 ， 與 型 別 轉 換 無 關 。",
      "C": "float() 轉 成 浮 點 數 ， 不 是 整 數 。",
      "D": "Python 沒 有 內 建 的  decimal() 函 式 （ Decimal 需  import ） 。"
    },
    "explanation": "• Python 內 建 型 別 轉 換 函 式 ： int() 轉 整 數 、 float() 轉 浮 點 、 str() 轉 字 串 。\n• 解 題 技 巧 ： 要 整 數 就 用  int() ， 名 稱 最 直 覺 。",
    "category": "python"
  },
  {
    "id": 22,
    "set": 1,
    "original_num": 22,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "abcabcabcabcabc",
      "B": "5*'abc'",
      "C": "5abc",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "5*'abc' 把  'abc' 重 複  5 次 得  'abcabcabcabcabc' →  (A) 。",
      "B": "5*'abc' 是 程 式 碼 本 身 ， 不 是 執 行 結 果 。",
      "C": "5abc 並 非 合 法 字 串 ， 也 不 是 重 複 結 果 。",
      "D": "字 串 乘 整 數 完 全 合 法 ， 不 會  error 。"
    },
    "explanation": "• 字 串 乘 以 整 數  n ， 代 表 把 該 字 串 「 重 複 串 接 」 n 次 。\n• 解 題 技 巧 ： str*int 是 重 複 ， 數 出  'abc' 出 現  5 次 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q22_question.png"
  },
  {
    "id": 23,
    "set": 1,
    "original_num": 23,
    "question": "要 新 建 二 進 位 檔 案 ， 就 是 把  open() 方 法 的  mode 參 數 加 入 哪 一 個 參 數 ？",
    "options": {
      "A": "b",
      "B": "t",
      "C": "m",
      "D": "h"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 加 入  'b' 表 示 以 二 進 位 模 式 開 檔 ， 如  'wb' 、 'rb' →  正 確 。",
      "B": "'t' 是 文 字 模 式 （ 預 設 ） ， 不 是 二 進 位 。",
      "C": "(D) 'm' 、 'h' 都 不 是  open() 認 得 的 模 式 參 數 。"
    },
    "explanation": "• open() 的  mode 參 數 可 組 合 ： r/w/a 搭 配  t （ 文 字 ） 或  b （ 二 進 位 ） 。\n• 解 題 技 巧 ： 二 進 位  binary 取 字 首  b 最 好 記 。",
    "category": "python"
  },
  {
    "id": 24,
    "set": 1,
    "original_num": 24,
    "question": "有 關 檔 案 的 描 述 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "使 用 open() 函 數 開 啟 檔 案 時 ， 檔 案 路 徑 必 須 以 跳 脫 序 列  來 表 示",
      "B": "檔 名 可 區 分 成 「 主 檔 名 」 與 「 副 檔 名 」",
      "C": "通 常 我 們 用 「 . 」 代 表 現 在 目 錄 ， 而 用 「 .. 」 代 表 上 一 層 目 錄",
      "D": "「 相 對 路 徑 」 就 是 相 對 於 現 在 目 錄 的 路 徑 表 示 法"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 有 誤 ： 路 徑 不 一 定 要 用 跳 脫 序 列 ， 可 用 原 始 字 串  r'...' 或 正 斜 線 「 / 」 表 示 。",
      "B": "正 確 ： 檔 名 確 可 分 為 主 檔 名 與 副 檔 名 。",
      "C": "正 確 ： 「 . 」 代 表 現 在 目 錄 、 「 .. 」 代 表 上 層 目 錄 。",
      "D": "正 確 ： 相 對 路 徑 就 是 相 對 於 目 前 目 錄 。"
    },
    "explanation": "• 題 目 問 「 有 誤 」 者 ， 需 找 出 對 檔 案 描 述 錯 誤 的 一 項 。\n• 解 題 技 巧 ： 「 必 須 」「 一 定 」 這 類 絕 對 字 眼 常 是 錯 誤 選 項 。",
    "category": "python"
  },
  {
    "id": 25,
    "set": 1,
    "original_num": 25,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "True",
      "B": "False",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "option_exps": {
      "A": "x=5 ， x==5 成 立 ， 故 印 出  True →  對 應  (A) 。",
      "B": "False 表 示 不 相 等 ， 但  5 確 實 等 於  5 。",
      "C": "(D) 比 較 結 果 是 布 林 值  True/False ， 不 是  1 、 0 。"
    },
    "explanation": "• 「 == 」 是 關 係 比 較 運 算 子 ， 回 傳 布 林 值  True 或  False 。\n• 解 題 技 巧 ： == 的 輸 出 固 定 是  True 或  False （ 字 首 大 寫 ） 。",
    "category": "python",
    "question_img": "圖片/python/q25_question.png"
  },
  {
    "id": 26,
    "set": 1,
    "original_num": 26,
    "question": "有 關 邏 輯 運 算 子 的 描 述 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "result = (48 % 6 == 0) and (24 % 4 == 0) 運 算 後 的 result 回 傳 False",
      "B": "運 算 結 果 僅 有 「 真 (True) 」 與 「 假 (False) 」 兩 種 值",
      "C": "包 括 and 、 or 、 not 等 運 算 子",
      "D": "使 用 and 、 or 運 算 子 做 邏 輯 運 算 時 ， 會 採 用 快 捷 運 算"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 48%6==0 為  True 、 24%4==0 為  True ， True and True = True ； 敘 述 卻",
      "B": "邏 輯 運 算 結 果 只 有  True ／ False ， 正 確 。",
      "C": "邏 輯 運 算 子 確 實 包 含  and 、 or 、 not ， 正 確 。",
      "D": "and ／ or 採 短 路 （ 快 捷 ） 運 算 ， 正 確 。"
    },
    "explanation": "• 題 目 問 「 何 者 有 誤 」 ， 要 挑 出 敘 述 錯 誤 的 那 一 個 。\n說 回 傳  False →  描 述 錯 誤 ， 即 正 解 。",
    "category": "python"
  },
  {
    "id": 27,
    "set": 1,
    "original_num": 27,
    "question": "有 關 指 派 運 算 子 的 描 述 ， 何 者 有 誤 ？",
    "options": {
      "A": "使 用 指 派 運 算 子 時 ， 變 數 的 值 不 必 事 先 設 定",
      "B": "是 將 等 號 右 方 的 資 料 值 指 派 給 等 號 左 方 的 變 數",
      "C": "有 單 一 指 派 和 複 合 指 派 兩 種 指 派 方 式",
      "D": "在 Python 中 單 一 個 等 號 「 = 」 是 指 派 ， 兩 個 等 號 「 == 」 用 來 做 關 係 比 較"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 敘 述 「 值 不 必 事 先 設 定 」 有 誤 ： 被 指 派 的 右 值 必 須 先 有 定 義 ， 否 則  NameError 。",
      "B": "正 確 ： 指 派 確 實 是 把 右 方 值 給 左 方 變 數 。",
      "C": "正 確 ： Python 有 單 一 指 派 與 複 合 指 派 （ 如  += ） 。",
      "D": "正 確 ： 「 = 」 是 指 派 、 「 == 」 是 比 較 。"
    },
    "explanation": "• 「 指 派 」 是 把 右 方 的 值 存 進 左 方 變 數 ， 變 數 會 就 此 建 立 。\n• 解 題 技 巧 ： 題 目 問 「 有 誤 」 ， 找 出 唯 一 錯 誤 的 敘 述 即 可 。",
    "category": "python"
  },
  {
    "id": 28,
    "set": 1,
    "original_num": 28,
    "question": "第 一 科 技 軟 體 公 司 聘 請 你 成 為 在 程 式 開 發 團 隊 中 程 式 設 計 部 門 的 實 習 生 ， 你 必 須 撰 寫 一 支 程 式 要 求 使 用 者 輸 入 一 個 值 ， 並 將\n其 轉 換 為 一 個 整 數 來 進 行 運 算 ， 你 需 要 編 寫 程 式 碼 以 符 合 要 求 ， 你 應 該 使 用 哪 個 程 式 碼 片 段 ？",
    "options": {
      "A": "B",
      "B": "",
      "C": "",
      "D": ""
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) int(input(...)) ： 先 取 輸 入 字 串 再 轉 整 數  →  完 全 符 合 需 求 。",
      "B": "只 有  input() ， 得 到 字 串 無 法 直 接 做 整 數 運 算 。",
      "C": "float(input(...)) 轉 成 浮 點 數 ， 不 是 整 數 。",
      "D": "Str(...) 大 寫 且 為 字 串 轉 換 ， 函 式 名 錯 誤 又 非 整 數 。"
    },
    "explanation": "• input() 取 得 的 恆 為 字 串 ， 要 「 轉 成 整 數 運 算 」 須 用  int() 包 起 來 。\n• 解 題 技 巧 ： 要 整 數 就 找  int(input(...)) 的 組 合 。",
    "category": "python",
    "options_are_images": true
  },
  {
    "id": 29,
    "set": 1,
    "original_num": 29,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "2.0",
      "B": "3.0",
      "C": "2.5",
      "D": "2.500000"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0//2.0 商 為  2 ， 但 運 算 元 是 浮 點 數 ， 結 果 保 留 浮 點  →  2.0 →  (A) 。",
      "B": "3.0 取 整 方 向 錯 誤 ， 5//2 應 為  2 不 是  3 。",
      "C": "(D) 2.5 、 2.500000 是 真 除 法 的 結 果 ， 「 // 」 會 去 掉 小 數 。"
    },
    "explanation": "• 「 // 」 是 整 除 （ floor division ） ， 取 商 並 向 下 取 整 ， 會 捨 棄 小 數 部 分 。\n• 解 題 技 巧 ： 浮 點 數 做 「 // 」 結 果 仍 是 浮 點 數 ， 但 值 是 整 除 後 的 商 。",
    "category": "python",
    "question_img": "圖片/python/q29_question.png"
  },
  {
    "id": 30,
    "set": 1,
    "original_num": 30,
    "question": "對 於  finally 指 令 描 述 ， 何 者 正 確 ？",
    "options": {
      "A": "無 論 有 無 異 常 皆 會 把 程 式 執 行 完 畢",
      "B": "捕 捉 例 外",
      "C": "引 發 例 外",
      "D": "處 理 例 外"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 不 管 有 沒 有 發 生 例 外 ， finally 內 的 程 式 一 定 會 被 執 行 完 畢  →  正 確 。",
      "B": "捕 捉 例 外 是  except 的 工 作 ， 不 是  finally 。",
      "C": "引 發 例 外 是  raise ， 不 是  finally 。",
      "D": "處 理 例 外 仍 屬 於  except 區 塊 。"
    },
    "explanation": "• try/except/finally 中 ， finally 區 塊 是 「 收 尾 」 用 ， 無 論 結 果 如 何 都 會 執 行 。\n• 解 題 技 巧 ： finally = 「 一 定 執 行 的 收 尾 」 ， 常 用 於 關 檔 、 釋 放 資 源 。",
    "category": "python"
  },
  {
    "id": 31,
    "set": 1,
    "original_num": 31,
    "question": "關 於 字 串 的 描 述 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "輸 出 字 串 時 想 要 分 行 顯 示 ， 可 以 在 要 斷 行 的 地 方 加 入 「 b 」",
      "B": "利 用 三 重 單 或 雙 引 號 把 多 行 字 串 ， 固 定 其 輸 出 的 模 式",
      "C": "當 程 式 碼 太 長 時 ， 只 要 在 該 行 末 端 加 一 個 反 斜 線 即 可 換 行 繼 續 撰 寫",
      "D": "字 串 物 件 一 但 被 配 置 ， 它 的 內 容 是 不 可 變 的"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 字 串 斷 行 用 的 是 「 \\n 」 這 個 跳 脫 序 列 ， 不 是 字 母 「 b 」 ， 敘 述 有 誤 。",
      "B": "三 重 單 / 雙 引 號 確 實 能 固 定 多 行 輸 出 格 式  →  正 確 敘 述 。",
      "C": "行 末 加 反 斜 線 即 可 續 行  →  正 確 敘 述 。",
      "D": "字 串 是 不 可 變 物 件  (immutable) →  正 確 敘 述 。"
    },
    "explanation": "• 三 重 引 號 可 保 留 多 行 原 貌 、 行 末 反 斜 線 可 續 行 、 字 串 建 立 後 不 可 變 ， 皆 正 確 。\n• 解 題 技 巧 ： 題 目 問 「 有 誤 」 ， 記 住 換 行 靠  \\n ， 看 到 用 「 b 」 斷 行 立 刻 選 它 。",
    "category": "python"
  },
  {
    "id": 32,
    "set": 1,
    "original_num": 32,
    "question": "假 設  pi=3.1415927 ，  請 問  print(\"%.3f \" % pi) 會 印 出 什 麼 ？",
    "options": {
      "A": "3.142",
      "B": "3.141",
      "C": "3.1416",
      "D": "3.1415"
    },
    "answer": "A",
    "option_exps": {
      "A": "%.3f 表 示 浮 點 數 印 到 小 數 第  3 位 ， 會 四 捨 五 入 。",
      "B": "3.141 是 直 接 截 斷 未 進 位  →  錯 。",
      "C": "3.1416 是  %.4f （ 4 位 ） 的 結 果  →  位 數 不 符 。",
      "D": "3.1415 是  %.4f 截 斷  →  位 數 與 進 位 都 不 符 。"
    },
    "explanation": "• pi=3.1415927 ， 第  4 位 是  5 須 進 位 ， 3.141 → 3.142 ， 對 應  (A) 。\n• 解 題 技 巧 ： %.nf 看  n 就 是 小 數 位 數 ， 且 要 四 捨 五 入 。",
    "category": "python"
  },
  {
    "id": 33,
    "set": 1,
    "original_num": 33,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "e",
      "B": "H",
      "C": "l",
      "D": "!"
    },
    "answer": "A",
    "option_exps": {
      "A": "print(a[1]) 取 第  2 個 字 元 ， 即  'e' ， 對 應  (A) 。",
      "B": "'H' 是  a[0] ， 不 是  a[1] 。",
      "C": "'l' 要  a[2] 或  a[3] 才 取 得 。",
      "D": "'!' 是 最 後 一 個 字 元  a[-1] 。"
    },
    "explanation": "• 字 串 索 引 從  0 起 算 ： a='Hello,World!' 的  a[0]='H' 、 a[1]='e' 。\n• 解 題 技 巧 ： 索 引 從  0 開 始 ， a[1] 是 「 第 二 個 」 字 元 。",
    "category": "python",
    "question_img": "圖片/python/q33_question.png"
  },
  {
    "id": 34,
    "set": 1,
    "original_num": 34,
    "question": "假 設  f 是 新 開 的 空 檔 ， 請 問 執 行  f.writelines([\"aa\",\"bb\",\"cc\"]) 後 ， f 檔 案 內 有 幾 行 資 料 ？",
    "options": {
      "A": "3",
      "B": "4",
      "C": "2",
      "D": "1"
    },
    "answer": "A",
    "option_exps": {
      "A": "3 是 把 「 字 串 個 數 」 當 行 數 ， 但 沒 有 換 行 就 不 是  3 行 （ 此 為 題 庫 標 示 的 答"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： A （ 3 行 ）\n正 確 結 果 ： 1 行  — 內 容 是  'aabbcc' ， writelines 不 會 換 行 （ 正 解 應 為  D ）\n• writelines() 把 串 列 中 每 個 字 串 「 原 樣 」 寫 入 ， 彼 此 之 間 不 會 自 動 加 換 行 。\n• ['aa','bb','cc'] 會 連 成  'aabbcc' ， 整 個 檔 案 其 實 只 有  1 行 。\n案 ） 。\n• 解 題 技 巧 ： writelines 不 換 行 ； 要 分 行 得 自 己 在 字 串 尾 端 加  \\n 。",
    "category": "python"
  },
  {
    "id": 35,
    "set": 1,
    "original_num": 35,
    "question": "假 設  a=7, b=2, c=4 ， 求 運 算 式  a%3+b*b-c//5 的 值 為 何 ？",
    "options": {
      "A": "5",
      "B": "1",
      "C": "1.25",
      "D": "-1.25"
    },
    "answer": "A",
    "option_exps": {
      "A": "1+4-0=5 ， 對 應  (A) 。",
      "B": "1 只 取 了  a%3 ， 漏 算 後 面 兩 項 。",
      "C": "(D) 出 現 小 數  →  // 是 整 數 除 法 ， 結 果 不 會 有 小 數 。"
    },
    "explanation": "• 依 運 算 優 先 序 ： 先 算  % * // ， 再 做  + - 。\n• a%3=7%3=1 ； b*b=2*2=4 ； c//5=4//5=0 。\n• 解 題 技 巧 ： % * // 同 級 且 高 於  + - ， 4//5 結 果 是  0 。",
    "category": "python"
  },
  {
    "id": 36,
    "set": 1,
    "original_num": 36,
    "question": "有 關 檔 案 的 描 述 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "通 常 我 們 用 「 . 」 代 表 現 在 目 錄 ， 而 用 「 .. 」 代 表 上 一 層 目 錄",
      "B": "檔 名 可 區 分 成 「 主 檔 名 」 與 「 副 檔 名 」",
      "C": "使 用 open() 函 數 開 啟 檔 案 時 ， 檔 案 路 徑 必 須 以 跳 脫 序 列 來 表 示",
      "D": "「 相 對 路 徑 」 就 是 相 對 於 現 在 目 錄 的 路 徑 表 示 法"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) open() 路 徑 不 一 定 要 用 跳 脫 序 列 ， 用 原 始 字 串  r'...' 或 正 斜 線 即 可 ， 敘 述 有 誤 。",
      "A": "「 . 」 代 表 現 在 目 錄 、 「 .. 」 代 表 上 層 目 錄  →  正 確 。",
      "B": "檔 名 分 主 檔 名 與 副 檔 名  →  正 確 。",
      "D": "相 對 路 徑 就 是 相 對 於 目 前 目 錄  →  正 確 。"
    },
    "explanation": "• Windows 反 斜 線 才 需 跳 脫 ， 並 非 「 必 須 」 用 跳 脫 序 列 。\n• 解 題 技 巧 ： 題 問 「 有 誤 」 ， 「 必 須 」「 一 定 」 這 類 絕 對 字 眼 常 是 陷 阱 。",
    "category": "python"
  },
  {
    "id": 37,
    "set": 1,
    "original_num": 37,
    "question": "下 列 哪 一 個 函 數 （ 或 方 法 ） 可 以 指 定 分 隔 符 號 將 字 串 分 割 為 子 字 串 ？",
    "options": {
      "A": "split() 函 數",
      "B": "len() 函 數",
      "C": "strip() 函 數",
      "D": "ord() 函 數"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) split() 可 指 定 分 隔 符 號 把 字 串 切 成 子 字 串 並 回 傳 串 列 。",
      "B": "len() 只 回 傳 長 度 （ 字 元 數 ） ， 不 做 分 割 。",
      "C": "strip() 是 去 除 頭 尾 空 白 或 指 定 字 元 ， 非 分 割 。",
      "D": "ord() 回 傳 單 一 字 元 的  Unicode 碼 ， 與 分 割 無 關 。"
    },
    "explanation": "• 解 題 技 巧 ： 要 把 字 串 「 切 開 」 就 想 到  split() 。",
    "category": "python"
  },
  {
    "id": 38,
    "set": 1,
    "original_num": 38,
    "question": "當 所 要 求 開 啟 或 寫 入 的 檔 案 不 存 在 時 ， 系 統 會 丟 出 底 下 何 種 例 外 ？",
    "options": {
      "A": "FileNotFoundError",
      "B": "TypeError",
      "C": "OverflowError",
      "D": "SystemError"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 開 啟 不 存 在 的 檔 案 （ 讀 取 模 式 ） 會 丟 出  FileNotFoundError 。",
      "B": "TypeError 是 型 別 錯 誤 ， 與 檔 案 是 否 存 在 無 關 。",
      "C": "OverflowError 是 數 值 溢 位 才 會 發 生 。",
      "D": "SystemError 是 直 譯 器 內 部 錯 誤 ， 非 檔 案 問 題 。"
    },
    "explanation": "• 解 題 技 巧 ： 例 外 名 稱 常 見 字 面 意 義 ， FileNotFound 就 是 「 找 不 到 檔 案 」 。",
    "category": "python"
  },
  {
    "id": 39,
    "set": 1,
    "original_num": 39,
    "question": "請 輸 入 空 格 ， 以 輸 出 'Hello World'_______________ ('Hello World')",
    "options": {
      "A": "print",
      "B": "list",
      "C": "found",
      "D": "echo"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) print() 是  Python 內 建 的 輸 出 函 式 ， print('Hello World') 即 可 印 出 。",
      "B": "list 是 建 立 串 列 ， 不 會 印 字 串 。",
      "C": "found 不 是 內 建 函 式 ， 會  NameError 。",
      "D": "echo 是  shell 指 令 ， Python 沒 有 這 個 函 式 。"
    },
    "explanation": "• 解 題 技 巧 ： Python 印 東 西 用  print() ， echo 是 命 令 列 才 有 。",
    "category": "python"
  },
  {
    "id": 40,
    "set": 1,
    "original_num": 40,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1",
      "B": "5",
      "C": "25",
      "D": "125"
    },
    "answer": "A",
    "option_exps": {
      "A": "print(x) 印 出  1 ， 對 應  (A) 。",
      "B": "5 是 右 移 前 的 原 值 。",
      "C": "(D) 25 、 125 是 平 方 或 立 方 ， 與 位 移 運 算 無 關 。"
    },
    "explanation": "• x>>=2 是 右 移  2 位 的 複 合 指 定 ， 等 同  x = x >> 2 。\n• 5 的 二 進 位 是  101 ， 右 移  2 位 變 成  1 （ 相 當 於  5 // 4 = 1 ） 。\n• 解 題 技 巧 ： 右 移  n 位 等 於 除 以  2 的  n 次 方 取 整 ， 5>>2 = 5//4 = 1 。",
    "category": "python",
    "question_img": "圖片/python/q40_question.png"
  },
  {
    "id": 41,
    "set": 1,
    "original_num": 41,
    "question": "下 面 哪 一 項 不 符 合 演 算 法 的 特 性 ？",
    "options": {
      "A": "允 許 無 窮 迴 路",
      "B": "至 少 會 有 一 個 輸 出 結 果",
      "C": "0 個 或 多 個 輸 入 資 料",
      "D": "步 驟 清 楚 且 可 行"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 演 算 法 必 須 在 有 限 步 驟 內 結 束 ， 「 允 許 無 窮 迴 路 」 違 反 有 限 性 ， 不 符 特 性 。",
      "B": "至 少 要 有 一 個 輸 出  →  符 合 「 輸 出 」 特 性 。",
      "C": "可 有  0 個 或 多 個 輸 入  →  符 合 「 輸 入 」 特 性 。",
      "D": "步 驟 清 楚 且 可 行  →  符 合 「 明 確 性 與 有 效 性 」 。"
    },
    "explanation": "• 演 算 法 五 大 特 性 ： 有 限 性 、 明 確 性 、 輸 入 、 輸 出 、 有 效 性 。\n• 解 題 技 巧 ： 演 算 法 一 定 要 會 「 停 」 ， 看 到 無 窮 迴 路 必 選 。",
    "category": "python"
  },
  {
    "id": 42,
    "set": 1,
    "original_num": 42,
    "question": "運 算 式  5%3+3//5*2 執 行 的 结 果 為 何 ？",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "A",
    "option_exps": {
      "A": "2+0=2 ， 對 應  (A) 。",
      "B": "(C)(D) 多 半 誤 把  3//5 當 成  0.6 或 忽 略 整 除  →  但  3//5=0 。"
    },
    "explanation": "• 依 優 先 序 先 算  % // * ， 再 做  + 。\n• 5%3=2 ； 3//5=0 ， 0*2=0 。\n• 解 題 技 巧 ： // 是 整 數 除 法 ， 分 子 小 於 分 母 時 結 果 為  0 。",
    "category": "python"
  },
  {
    "id": 43,
    "set": 1,
    "original_num": 43,
    "question": "下 面 哪 一 個  Python 程 式 庫 不 適 合 做 科 學 計 算 ？",
    "options": {
      "A": "PyQT",
      "B": "NumPy",
      "C": "SciPy",
      "D": "Matplotlib"
    },
    "answer": "A",
    "option_exps": {
      "A": "PyQt 是 用 來 開 發 圖 形 使 用 者 介 面 （ GUI ） 的 工 具 ， 與 科 學 計 算 無 關 ， 對 應",
      "B": "NumPy 提 供 多 維 陣 列 與 數 值 運 算 ， 是 科 學 計 算 的 核 心 套 件 。",
      "C": "SciPy 建 構 在  NumPy 之 上 ， 提 供 積 分 、 最 佳 化 等 科 學 運 算 。",
      "D": "Matplotlib 用 於 繪 製 圖 表 ， 是 科 學 數 據 視 覺 化 的 常 用 工 具 。"
    },
    "explanation": "(A) 。\n• 解 題 技 巧 ： NumPy 、 SciPy 、 Matplotlib 是 科 學 計 算 三 巨 頭 ， PyQt 是  GUI 框\n架 。",
    "category": "python"
  },
  {
    "id": 44,
    "set": 1,
    "original_num": 44,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "llo",
      "B": "lo,",
      "C": "ell",
      "D": "Hel"
    },
    "answer": "A",
    "option_exps": {
      "A": "切 出 來 的 子 字 串 為 「 llo 」 ， 對 應  (A) 。",
      "B": "lo, 是 索 引  3~5 ； ✗  (C) ell 是 索 引  1~3 ； ✗  (D) Hel 是 索 引  0~2 ， 皆 不 符 。"
    },
    "explanation": "• 字 串 切 片  b[2:5] 取 索 引  2 、 3 、 4 （ 含 頭 不 含 尾 ） ， 共 三 個 字 元 。\n• b='Hello,World!' ， 索 引  2 、 3 、 4 分 別 是  l 、 l 、 o 。\n• 解 題 技 巧 ： s[a:b] 從 索 引  a 取 到  b-1 ， 數 量 為  b-a 。",
    "category": "python",
    "question_img": "圖片/python/q44_question.png"
  },
  {
    "id": 45,
    "set": 1,
    "original_num": 45,
    "question": "a, b, c, d 分 別 代 表 一 個 變 數 ， 關 於 數 學 表 示 式  ab/(3cd) 下 面 何 者 不 是 正 確 的  Python 表 示 式 ？",
    "options": {
      "A": "a*b/3<*c*d",
      "B": "a*b/(3*c*d)",
      "C": "a*b/3/c/d",
      "D": "a/3*b/c/d"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) a*b/3<*c*d 中 的 「 <* 」 不 是 合 法 運 算 子  →  語 法 錯 誤 ， 故 為 不 正 確 的 表 示",
      "B": "a*b/(3*c*d) 分 母 完 整 加 括 號 ， 正 確 表 達  ab/(3cd) 。",
      "C": "a*b/3/c/d 從 左 到 右 連 續 除 以  3 、 c 、 d ， 等 於 除 以  3cd ， 正 確 。",
      "D": "a/3*b/c/d 結 果 同 為  ab/(3cd) ， 也 是 正 確 寫 法 。"
    },
    "explanation": "• 題 目 要 表 達  ab/(3cd) ， 需 把 整 個 分 母  3*c*d 用 括 號 包 住 或 連 續 除 。\n式 。",
    "category": "python"
  },
  {
    "id": 46,
    "set": 1,
    "original_num": 46,
    "question": "請 問 指 令  print(ʼAʼ>ʼaʼ 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "True",
      "C": "1",
      "D": "0"
    },
    "answer": "A",
    "option_exps": {
      "A": "比 較 結 果 為 布 林 值  False ， 對 應  (A) 。",
      "B": "True 與 實 際 碼 值 相 反 ； ✗  (C)(D) Python 比 較 結 果 是  True/False ， 不 是"
    },
    "explanation": "• 字 串 比 大 小 是 逐 字 元 比  Unicode （ ASCII ） 碼 ， 大 寫 字 母 碼 小 於 小 寫 。\n• 'A' 的 碼 是  65 ， 'a' 的 碼 是  97 ， 所 以  'A' > 'a' 不 成 立 。\n1/0 。\n• 解 題 技 巧 ： 大 寫 在 前 、 小 寫 在 後 ， 所 以 大 寫 字 母 一 律 小 於 小 寫 字 母 。",
    "category": "python"
  },
  {
    "id": 47,
    "set": 1,
    "original_num": 47,
    "question": "下 面 關 於  Python 的 說 明 ， 何 者 有 誤 ？",
    "options": {
      "A": "Python 是 編 譯 式 語 言",
      "B": "Python 是 物 件 導 向 式 語 言",
      "C": "Python 有 豐 富 的 資 料 類 型",
      "D": "Python 有 豐 富 的 程 式 庫"
    },
    "answer": "A",
    "option_exps": {
      "A": "Python 是 直 譯 式 （ interpreted ） 語 言 ， 不 是 編 譯 式 語 言 ， 故  (A) 的 說 明 有 誤 。",
      "B": "Python 確 實 是 物 件 導 向 語 言 ， 敘 述 正 確 。",
      "C": "Python 內 建  int 、 float 、 str 、 list 、 dict 等 豐 富 資 料 型 別 ， 正 確 。",
      "D": "Python 擁 有 龐 大 的 標 準 與 第 三 方 程 式 庫 ， 正 確 。"
    },
    "explanation": "• 解 題 技 巧 ： 本 題 問 「 有 誤 」 者 ， 直 譯  vs 編 譯 是  Python 的 經 典 考 點 。",
    "category": "python"
  },
  {
    "id": 48,
    "set": 1,
    "original_num": 48,
    "question": "使 用 檔 案 物 件 所 提 供 的 方 法 從 檔 案 讀 取 資 料 不 包 括 ？",
    "options": {
      "A": "seek() 方 法",
      "B": "readlines() 方 法",
      "C": "readline() 方 法",
      "D": "read() 方 法"
    },
    "answer": "A",
    "option_exps": {
      "A": "seek() 是 移 動 檔 案 讀 寫 指 標 的 位 置 ， 並 不 會 讀 取 資 料 ， 對 應  (A) 。",
      "B": "readlines() 一 次 讀 入 所 有 行 並 回 傳 串 列 。",
      "C": "readline() 一 次 讀 取 一 行 。",
      "D": "read() 讀 取 整 個 （ 或 指 定 長 度 的 ） 檔 案 內 容 。"
    },
    "explanation": "• 檔 案 讀 取 方 法 有  read() 、 readline() 、 readlines() ， 用 來 取 得 內 容 。",
    "category": "python"
  },
  {
    "id": 49,
    "set": 1,
    "original_num": 49,
    "question": "下 面 哪 一 項 不 是 演 算 法 的 特 性 ？",
    "options": {
      "A": "簡 潔 性",
      "B": "明 確 性",
      "C": "可 行 性",
      "D": "有 限 性"
    },
    "answer": "A",
    "option_exps": {
      "A": "「 簡 潔 性 」 不 在 演 算 法 的 標 準 特 性 之 列 ， 對 應  (A) 。",
      "B": "明 確 性 指 每 個 步 驟 都 清 楚 無 歧 義 ， 是 必 備 特 性 。",
      "C": "可 行 性 指 步 驟 都 能 實 際 執 行 完 成 。",
      "D": "有 限 性 指 演 算 法 必 須 在 有 限 步 驟 內 結 束 。"
    },
    "explanation": "• 演 算 法 的 五 大 特 性 ： 輸 入 、 輸 出 、 明 確 性 、 有 限 性 、 有 效 （ 可 行 ） 性 。",
    "category": "python"
  },
  {
    "id": 50,
    "set": 1,
    "original_num": 50,
    "question": "請 問 運 算 式  ʼabcʼ+ʼ1.0ʼ 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "abc1.0",
      "B": "abc1",
      "C": "abc1.000000",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "結 果 為  abc1.0 ， 對 應  (A) 。",
      "B": "abc1 漏 掉  .0 ； ✗  (C) abc1.000000 多 補 了 位 數 ， 字 串 不 會 自 動 補 零 。",
      "D": "兩 個 皆 為 字 串 ， 相 加 合 法 不 會  error 。"
    },
    "explanation": "• + 用 於 兩 個 字 串 時 是 「 字 串 串 接 」 ， 直 接 把 字 元 接 在 一 起 。\n• 'abc' 與  '1.0' 都 是 字 串 ， 串 接 後 即 為  'abc1.0' 。",
    "category": "python"
  },
  {
    "id": 51,
    "set": 1,
    "original_num": 51,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "aa",
      "B": "a",
      "C": "error",
      "D": "2a"
    },
    "answer": "A",
    "option_exps": {
      "A": "印 出  aa ， 對 應  (A) 。",
      "B": "a 是 只 重 複 一 次 的 結 果 ； ✗  (D) 2a 把 數 字 也 印 出 來 ， 與 字 串 重 複 不 符 。",
      "C": "字 串 乘 以 整 數 合 法 ， 不 會  error 。"
    },
    "explanation": "• x*=2 等 同  x = x*2 ； 對 字 串 而 言  * 是 「 重 複 」 運 算 。\n• x='a' ， 'a'*2 會 把 字 串 重 複 兩 次 得 到  'aa' 。",
    "category": "python",
    "question_img": "圖片/python/q51_question.png"
  },
  {
    "id": 52,
    "set": 1,
    "original_num": 52,
    "question": "請 問  Python 指 令  x=5; x <<=2; print(x) 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "20",
      "B": "10",
      "C": "5",
      "D": "2"
    },
    "answer": "A",
    "option_exps": {
      "A": "5 << 2 = 20 ， 印 出  20 ， 對 應  (A) 。",
      "B": "10 是 左 移  1 位 的 結 果 ； ✗  (C) 5 是 沒 移 位 ； ✗  (D) 2 與 運 算 無 關 。"
    },
    "explanation": "• <<= 是 左 移 指 定 運 算 ， x <<= 2 等 同  x = x << 2 。\n• 左 移  n 位 相 當 於 乘 以  2 的  n 次 方 ， x=5 左 移  2 位 即  5*4 。\n• 解 題 技 巧 ： x << n 等 於  x * 2**n ， 本 題  5*2²=20 。",
    "category": "python"
  },
  {
    "id": 53,
    "set": 1,
    "original_num": 53,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "5.0",
      "B": "4.0",
      "C": "5",
      "D": "4"
    },
    "answer": "A",
    "option_exps": {
      "A": "印 出  5.0 ， 對 應  (A) 。",
      "B": "4.0 、 ✗  (D) 4 數 值 就 算 錯 了 ； ✗  (C) 5 是 整 數 型 別 ， 與  / 的 浮 點 結 果 不 符 。"
    },
    "explanation": "• / 是 真 除 法 ， 結 果 一 定 是 浮 點 數 （ float ） ， 不 會 是 整 數 。\n• x=5.0 ， x/=1 即  5.0/1 = 5.0 ， 型 別 仍 為  float 。\n• 解 題 技 巧 ： 只 要 用  / （ 真 除 法 ） ， 結 果 必 帶 小 數 點 。",
    "category": "python",
    "question_img": "圖片/python/q53_question.png"
  },
  {
    "id": 54,
    "set": 1,
    "original_num": 54,
    "question": "假 設  pi=3.1415927 ，  請 問  print(\"%f \" % pi) 會 印 出 什 麼 ？",
    "options": {
      "A": "3.141593",
      "B": "3.141592",
      "C": "3.1416",
      "D": "3.1415"
    },
    "answer": "A",
    "option_exps": {
      "A": "結 果 為  3.141593 ， 對 應  (A) 。",
      "B": "3.141592 沒 做 進 位 （ 少 進 了  1 ） 。",
      "C": "3.1416 、 ✗  (D) 3.1415 位 數 不 足 ， 非  %f 預 設 的  6 位 。"
    },
    "explanation": "• %f 是 浮 點 數 格 式 ， 預 設 輸 出 小 數 點 後  6 位 ， 會 做 四 捨 五 入 。\n• pi=3.1415927 ， 取 到 小 數 第  6 位 並 四 捨 五 入 （ 第  7 位 是  7 ） 。",
    "category": "python"
  },
  {
    "id": 55,
    "set": 1,
    "original_num": 55,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "hello, world!",
      "B": "Hello, world!",
      "C": "hello, World!",
      "D": "HELLO, WORLD!"
    },
    "answer": "A",
    "option_exps": {
      "A": "lower() 把 字 串 中 的 英 文 字 母 全 部 轉 成 小 寫 ， 數 字 、 標 點 不 受 影 響 。",
      "B": "仍 保 留 大 寫  H →  與  lower() 矛 盾 。",
      "C": "仍 保 留 大 寫  W →  不 可 能 。",
      "D": "整 串 大 寫 ， 那 是  upper() 的 結 果  →  排 除 。"
    },
    "explanation": "• 原 字 串 「 Hello,World! 」 轉 小 寫 後 為 「 hello,world! 」 ， 對 應  (A) 。\n• 解 題 技 巧 ： 看 到  lower() ， 凡 選 項 出 現 大 寫 字 母 一 律 先 刪 。",
    "category": "python",
    "question_img": "圖片/python/q55_question.png"
  },
  {
    "id": 56,
    "set": 1,
    "original_num": 56,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "10.0",
      "B": "10.000000",
      "C": "x*2.0",
      "D": "2.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "整 數  5 乘 以 浮 點 數  2.0 ， 結 果 會 自 動 提 升 為 浮 點 數  10.0 。",
      "B": "10.000000 是  %f 格 式 化 才 會 出 現 的 補 零 ， print 不 會 這 樣 顯 示 。",
      "C": "x*2.0 是 字 面 字 串 ， 但  print 算 的 是 運 算 結 果 ， 不 會 原 樣 輸 出 。",
      "D": "2.0 漏 算 了 乘 以  5 →  數 值 錯 誤 。"
    },
    "explanation": "• 只 要 運 算 式 中 有 一 個 是  float ， 結 果 就 是  float ， 所 以 印 出  10.0 而 非  10 。",
    "category": "python",
    "question_img": "圖片/python/q56_question.png"
  },
  {
    "id": 57,
    "set": 1,
    "original_num": 57,
    "question": "假 設  a=7, b=2, c=4 ， 求 運 算 式  a/2+b/2-c 的 值 為 何 ？",
    "options": {
      "A": "0.5",
      "B": "-0.5",
      "C": "1.25",
      "D": "-1.25"
    },
    "answer": "A",
    "option_exps": {
      "A": "7/2=3.5 ， 2/2=1.0 ， 3.5+1.0-4 = 0.5 ， 對 應  (A) 。",
      "B": "-0.5 正 負 號 相 反  →  計 算 有 誤 。",
      "C": "(D) 1.25 / -1.25 與 本 式 無 關  →  排 除 。"
    },
    "explanation": "• 依 運 算 優 先 序 ， 先 做 除 法 再 做 加 減 ： a/2 + b/2 - c 。\n• Python3 的  / 是 真 除 法 ， 結 果 為 浮 點 數 ， 故 得  0.5 。",
    "category": "python"
  },
  {
    "id": 58,
    "set": 1,
    "original_num": 58,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "615",
      "B": "555",
      "C": "605",
      "D": "5"
    },
    "answer": "A",
    "option_exps": {
      "A": "5+55+555 = 615 ， 對 應  (A) 。",
      "B": "555 漏 加 了  n1 、 n2 →  數 值 不 對 。",
      "C": "605 計 算 錯 誤 ； (D) 5 只 取 了  n1 →  排 除 。"
    },
    "explanation": "• %s 會 把 整 數  a 轉 成 字 串 再 代 入 ， 外 層  int() 再 把 字 串 轉 回 整 數 。\n• n1=int('5')=5 ； n2=int('55')=55 ； n3=int('555')=555 。\n• 解 題 技 巧 ： %s 把 數 字 當 字 串 重 複 串 接 ， 注 意 位 數 變 化 。",
    "category": "python",
    "question_img": "圖片/python/q58_question.png"
  },
  {
    "id": 59,
    "set": 1,
    "original_num": 59,
    "question": "對 於  try/except 的 描 述 ， 何 者 正 確 ？",
    "options": {
      "A": "try 敘 述 是 用 來 捕 捉 例 外",
      "B": "無 論 有 無 例 外 ， 皆 會 將 程 式 執 行 完 畢",
      "C": "except 指 令 只 能 指 定 一 個 例 外 型 別",
      "D": "無 論 有 無 例 外 引 發 ， else 指 令 所 形 成 的 區 段 一 定 會 被 執 行"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) try 區 段 用 來 包 住 「 可 能 出 錯 」 的 程 式 ， 以 便 捕 捉 並 處 理 例 外 。",
      "B": "一 旦 發 生 例 外 又 未 被 處 理 ， 程 式 會 中 斷 ， 並 非 一 定 執 行 完 畢 。",
      "C": "except 可 用  tuple 同 時 指 定 多 個 例 外 型 別 ， 非 只 能 一 個 。",
      "D": "else 只 在 「 沒 有 發 生 例 外 」 時 才 執 行 ， 並 非 一 定 執 行 。"
    },
    "explanation": "• 解 題 技 巧 ： finally 才 是 無 論 如 何 都 執 行 ， 別 和  else 搞 混 。",
    "category": "python"
  },
  {
    "id": 60,
    "set": 1,
    "original_num": 60,
    "question": "有 關  Python 資 料 型 態 的 說 明 ， 下 列 何 者 正 確 ？",
    "options": {
      "A": "動 態 型 別 、 強 型 別",
      "B": "靜 態 型 別 、 弱 型 別",
      "C": "動 態 型 別 、 弱 型 別",
      "D": "靜 態 型 別 、 強 型 別"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) Python 是 動 態 型 別 （ 變 數 型 別 執 行 期 決 定 ） 且 強 型 別 （ 不 會 自 動 亂 轉 型 ） 。",
      "B": "(D) Python 並 非 靜 態 型 別 ， 宣 告 時 不 需 指 定 型 別  →  排 除 。",
      "C": "弱 型 別 會 自 動 隱 式 轉 型 ， 與  Python 行 為 不 符  →  排 除 。"
    },
    "explanation": "• 動 態 ： x=1 後 可 再  x='a' ； 強 型 別 ： '1'+1 會  TypeError 而 非 自 動 轉 。",
    "category": "python"
  },
  {
    "id": 61,
    "set": 1,
    "original_num": 61,
    "question": "下 列 哪 一 個 函 數 可 以 回 傳  ASCII 碼 對 應 的 字 ？",
    "options": {
      "A": "chr() 函 數",
      "B": "ord() 函 數",
      "C": "strip() 函 數",
      "D": "split() 函 數"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) chr() 把 整 數 （ ASCII/Unicode 碼 ） 轉 回 對 應 的 字 元 ， 例 如  chr(65)='A' 。",
      "B": "ord() 方 向 相 反 ， 是 把 字 元 轉 成 碼  →  與 題 意 相 反 。",
      "C": "strip() 是 去 除 字 串 前 後 空 白  →  與  ASCII 無 關 。",
      "D": "split() 是 依 分 隔 符 切 割 字 串  →  與 題 意 無 關 。"
    },
    "explanation": "• 解 題 技 巧 ： chr= 碼 → 字 、 ord= 字 → 碼 ， 互 為 反 函 式 。",
    "category": "python"
  },
  {
    "id": 62,
    "set": 1,
    "original_num": 62,
    "question": "假 設  pi=3.1415927 ，  請 問  print(\"%2.2f \" % pi) 會 印 出 什 麼 ？",
    "options": {
      "A": "3.14",
      "B": "03.14",
      "C": "3.15",
      "D": "03.15"
    },
    "answer": "A",
    "option_exps": {
      "A": "pi=3.1415927 取  2 位 小 數 會 四 捨 五 入 為  3.14 ， 對 應  (A) 。",
      "B": "(D) 開 頭 補  0 需 用  %05.2f 之 類 ， 本 式 不 會 補 零  →  排 除 。",
      "C": "3.15 是 進 位 錯 誤 ， 第 三 位 是  1 不 會 進 位  →  排 除 。"
    },
    "explanation": "• %2.2f ： 小 數 點 後 保 留  2 位 、 總 寬 度 至 少  2 （ 不 足 才 補 空 白 ） 。\n• 解 題 技 巧 ： %a.bf 的  b 才 是 小 數 位 數 ， a 只 是 最 小 總 寬 。",
    "category": "python"
  },
  {
    "id": 63,
    "set": 1,
    "original_num": 63,
    "question": "下 列  4 種  Python 運 算 式 ， 何 者 和 其 他 三 者 的 結 果 不 同 ？",
    "options": {
      "A": "a=0, b=0, c=0",
      "B": "a=0; b=0; c=0",
      "C": "a=b=c=0",
      "D": "a, b, c=0, 0, 0"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) a=0, b=0, c=0 用 逗 號 寫 成 一 行 ， 是 不 合 法 語 法 （ 會  SyntaxError ） ， 與 其",
      "B": "用 分 號 分 隔 多 個 敘 述  →  合 法 ， 三 者 皆  0 。",
      "C": "連 鎖 指 定  a=b=c=0 →  合 法 ， 三 者 皆  0 。",
      "D": "多 重 指 定  a,b,c=0,0,0 →  合 法 ， 三 者 皆  0 。"
    },
    "explanation": "• (B)(C)(D) 都 讓  a 、 b 、 c 三 者 皆 為  0 ， 結 果 相 同 。\n他 三 者 不 同 。",
    "category": "python"
  },
  {
    "id": 64,
    "set": 1,
    "original_num": 64,
    "question": "下 面 哪 一 個 不 是 合 法 的 整 數 常 數 ？",
    "options": {
      "A": "%100",
      "B": "&O100",
      "C": "&H100",
      "D": "100"
    },
    "answer": "A",
    "option_exps": {},
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： A （ %100 ）\n正 確 結 果 ： (A)(B)(C) 在  Python 中 都 不 是 合 法 整 數 常 數 （ &O/&H 是  BASIC 寫 法 ） ， 符 合\n題 意 者 不 只  A ， 本 題 答 案 不 唯 一\n• Python 合 法 整 數 常 數 寫 法 ： 十 進 位  100 、 八 進 位  0o100 、 十 六 進 位  0x100 、 二 進 位\n0b100 。\n• 題 目 要 選 「 不 是 合 法 整 數 常 數 」 者 。 (A) %100 的  % 是 取 餘 運 算 子 、 不 是 數 字 前 綴  →\n不 合 法 ， 此 即 題 庫 標 示 的 答 案 。\n• (B) &O100 、 (C) &H100 ： &O ／ &H 是  BASIC 的 八 ／ 十 六 進 位 寫 法 ， Python 並 不 接 受\n→  在  Python 中 同 樣 不 合 法 。\n• (D) 100 是 標 準 十 進 位 整 數 ， 為 四 者 中 唯 一 合 法 的 寫 法 。\n• 瑕 疵 ： 以  Python 而 言 ， 符 合 「 不 合 法 」 的 有  (A)(B)(C) 三 個 、 並 非 只 有  A ， 故 本 題 答\n案 不 唯 一 。",
    "category": "python"
  },
  {
    "id": 65,
    "set": 1,
    "original_num": 65,
    "question": "Python 程 式 裡 的 區 塊 ， 可 以 透 過 哪 一 種 方 式 來 區 分 出 程 式 碼 層 級 ， 讓 程 式 更 具 有 可 讀 性 ？",
    "options": {
      "A": "縮 排",
      "B": "註 解",
      "C": "跳 行",
      "D": "留 白"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) Python 以 「 縮 排 」 來 界 定 程 式 區 塊 與 層 級 ， 取 代 其 他 語 言 的 大 括 號 。",
      "B": "註 解 只 供 人 閱 讀 ， 不 影 響 程 式 區 塊 劃 分 。",
      "C": "跳 行 （ 換 行 ） 僅 分 隔 敘 述 ， 不 決 定 層 級 。",
      "D": "留 白 （ 空 格 ） 若 非 行 首 縮 排 則 無 區 塊 意 義  →  排 除 。"
    },
    "explanation": "• 縮 排 不 一 致 會 直 接 造 成  IndentationError ， 可 見 它 是 語 法 強 制 的 。",
    "category": "python"
  },
  {
    "id": 66,
    "set": 1,
    "original_num": 66,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "orl",
      "B": "rld",
      "C": "Wor",
      "D": "ld!"
    },
    "answer": "A",
    "option_exps": {
      "A": "取  -5 、 -4 、 -3 三 個 字 元 ， 即  'o''r''l' = orl ， 對 應  (A) 。",
      "B": "rld 多 含 了  d(-2) ， 但  -2 是 開 區 間 不 取  →  排 除 。",
      "C": "Wor 起 點 抓 錯 成  -6 ； (D) ld! 索 引 整 個 偏 移  →  排 除 。"
    },
    "explanation": "• 字 串 切 片  b[-5:-2] ： 從 倒 數 第  5 個 取 到 倒 數 第  2 個 （ 不 含  -2 ） 。\n• 「 Hello,World! 」 倒 數 依 序 為  !(-1) d(-2) l(-3) r(-4) o(-5) 。\n• 解 題 技 巧 ： 負 索 引 切 片 仍 是 「 含 頭 不 含 尾 」 ， 結 尾 那 格 不 取 。",
    "category": "python",
    "question_img": "圖片/python/q66_question.png"
  },
  {
    "id": 67,
    "set": 1,
    "original_num": 67,
    "question": "請 問 運 算 式  5.0**2 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "25.0",
      "B": "25.00",
      "C": "2.5",
      "D": "25.000000"
    },
    "answer": "A",
    "option_exps": {
      "A": "** 是 次 方 運 算 ， 5.0**2 即  5.0 的 平 方  = 25.0 。",
      "B": "25.00 、 (D) 25.000000 ： Python 不 會 自 動 補 零 位 ， 多 餘 小 數 位 是 多 想",
      "C": "2.5 ： 那 是  5.0/2 的 結 果 ， 與 次 方 無 關 。"
    },
    "explanation": "• 底 數 含 小 數 點 是 浮 點 數 ， 結 果 也 是 浮 點 數 ， 固 定 印 成 「 25.0 」 ， 對 應  (A) 。\n的 。\n• 解 題 技 巧 ： 浮 點 數 運 算 結 果 預 設 只 留 必 要 位 數 ， 印 出 就 是  25.0 。",
    "category": "python"
  },
  {
    "id": 68,
    "set": 1,
    "original_num": 68,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "125",
      "B": "15",
      "C": "2",
      "D": "1"
    },
    "answer": "A",
    "option_exps": {
      "A": "5**3 = 5×5×5 = 125 ， 整 數 的 整 數 次 方 仍 是 整 數 ， 對 應  (A) 。",
      "B": "15 ： 那 是  5×3 ， 把 次 方 誤 當 乘 法 。",
      "C": "2 、 (D) 1 ： 與  5 的 三 次 方 完 全 無 關 。"
    },
    "explanation": "• 程 式 為  x=5; print(x**3) ， ** 代 表 次 方 。\n• 解 題 技 巧 ： x**3 是 立 方 ， 別 跟  x*3 （ 乘 法 ） 搞 混 。",
    "category": "python",
    "question_img": "圖片/python/q68_question.png"
  },
  {
    "id": 69,
    "set": 1,
    "original_num": 69,
    "question": "請 問  Python 指 令  x=5; x&=1; print(x) 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1",
      "B": "5",
      "C": "0",
      "D": "25"
    },
    "answer": "A",
    "option_exps": {
      "A": "逐 位  AND ： 101 & 001 = 001 = 1 ， 故  print(x) 印 出  1 ， 對 應  (A) 。",
      "B": "5 ： 那 是 運 算 前 的 原 值 ， 沒 做  AND 。",
      "C": "0 ： 誤 以 為  AND 會 全 變  0 ； 最 低 位 都 是  1 ， 結 果 保 留  1 。",
      "D": "25 ： 那 是  5×5 ， 與 位 元 運 算 無 關 。"
    },
    "explanation": "• &= 是 位 元  AND 後 再 指 派 ； 先 看  5 與  1 的 二 進 位 ： 5=101 、 1=001 。",
    "category": "python"
  },
  {
    "id": 70,
    "set": 1,
    "original_num": 70,
    "question": "請 問 運 算 式  5.00%2.00 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "1.0",
      "B": "1.00",
      "C": "2.5",
      "D": "2.500000"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0 = 2×2.0 + 1.0 ， 餘 數 為  1.0 ； 含 浮 點 數 則 結 果 為 浮 點 ， 對 應  (A) 。",
      "B": "1.00 ： Python 印 浮 點 不 會 多 補 一 個 零 ， 只 會 印  1.0 。",
      "C": "2.5 ： 那 是  5.0/2 的 「 商 」 ， 不 是 餘 數 。",
      "D": "2.500000 ： 同 樣 是 把 除 法 商 再 亂 補 位 ， 與  % 無 關 。"
    },
    "explanation": "• % 是 取 餘 數 ； 5.00%2.00 即  5.0 除 以  2.0 的 餘 數 。",
    "category": "python"
  },
  {
    "id": 71,
    "set": 1,
    "original_num": 71,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "25.0",
      "B": "25.00",
      "C": "2.5",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "只 要 運 算 元 有 一 個 是 浮 點 數 ， 結 果 就 是 浮 點 數 ： 5**2.0 = 25.0 ， 對 應  (A) 。",
      "B": "25.00 ： 浮 點 輸 出 不 會 多 補 零 ， 只 印  25.0 。",
      "C": "2.5 ： 與 平 方 無 關 ， 是 除 法 的 數 值 。",
      "D": "error ： 5**2.0 語 法 完 全 合 法 ， 不 會 出 錯 。"
    },
    "explanation": "• 程 式 為  x=5; print(x**2.0) ， 指 數 是 浮 點 數  2.0 。",
    "category": "python",
    "question_img": "圖片/python/q71_question.png"
  },
  {
    "id": 72,
    "set": 1,
    "original_num": 72,
    "question": "使 用 內 建 函 數 時 ， 參 數 的 型 別 正 確 ， 但 值 不 正 確 ， 系 統 會 丟 出 何 種 例 外 ？",
    "options": {
      "A": "TypeError",
      "B": "IndexError",
      "C": "OverflowError",
      "D": "SystemError"
    },
    "answer": "A",
    "option_exps": {
      "A": "TypeError 是 「 型 別 」 錯 誤 時 才 發 生 ， 與 「 型 別 正 確 、 值 不 對 」 矛 盾  →  題 庫 標 為 答",
      "B": "IndexError 是 索 引 越 界 、 (C) OverflowError 是 數 值 溢 位 、 (D) SystemError 是 直 譯"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： A （ TypeError ）\n正 確 結 果 ： ValueError — 型 別 正 確 但 「 值 」 不 合 法 時 丟  ValueError （ 如  int('abc') ） ； 此\n例 外 不 在 四 個 選 項 中\n• 題 幹 說 「 型 別 正 確 、 但 值 不 正 確 」 —— 這 正 是  ValueError 的 定 義 （ 如  int('abc') 、\nmath.sqrt(-1) ） 。\n案 但 其 實 有 誤 。\n器 內 部 錯 誤 ， 皆 不 符 。\n• 解 題 技 巧 ： 型 別 對 、 值 錯  →  ValueError ； 型 別 本 身 就 錯  →  TypeError 。",
    "category": "python"
  },
  {
    "id": 73,
    "set": 1,
    "original_num": 73,
    "question": "要 在  Windows 下 直 接 執 行  Python ， 應 該 如 何 設 定 ？",
    "options": {
      "A": "將  Python 的 安 裝 目 錄 添 加 到 Windows 下 的  PATH 變 數 中",
      "B": "不 須 特 別 設 定 ， 使 用 內 定 安 裝 即 可",
      "C": "Python 並 不 提 供 此 項 功 能",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 把  Python 安 裝 目 錄 加 入  Windows 的  PATH 環 境 變 數 即 可 全 域 執 行 。",
      "B": "內 定 安 裝 若 未 勾 選 加 入  PATH ， 命 令 列 會 找 不 到  python 指 令 。",
      "C": "Python 當 然 提 供 命 令 列 執 行 ， 說 「 不 提 供 」 明 顯 錯 誤 。",
      "D": "以 上 皆 非 ： (A) 已 是 正 確 做 法 ， 故 不 選 。"
    },
    "explanation": "• 想 在 任 意 路 徑 直 接 打  python 執 行 ， 作 業 系 統 要 找 得 到 該 執 行 檔 。",
    "category": "python"
  },
  {
    "id": 74,
    "set": 1,
    "original_num": 74,
    "question": "下 列 運 算 式 中 ， 何 者 的 值 不 是  1 ？",
    "options": {
      "A": "~1",
      "B": "4//3",
      "C": "15%2",
      "D": "1^0"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) ~1 是 位 元 取 反  = -(1+1) = -2 ， 不 是  1 ， 故 為 正 解 。",
      "B": "4//3 整 數 除 法  = 1 。",
      "C": "15%2 取 餘 數  = 1 。",
      "D": "1^0 位 元  XOR = 1 ， 三 者 皆 為  1 。"
    },
    "explanation": "• 逐 一 計 算 各 選 項 的 值 ， 找 出 「 不 等 於  1 」 者 。\n• 解 題 技 巧 ： ~n 等 於  -(n+1) ， ~1 直 接 得  -2 。",
    "category": "python"
  },
  {
    "id": 75,
    "set": 1,
    "original_num": 75,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "3.0",
      "B": "3.00",
      "C": "3",
      "D": "3.000000"
    },
    "answer": "A",
    "option_exps": {
      "A": "浮 點 數 與 整 數 相 減 ， 結 果 仍 是 浮 點 數 ： 5.0 - 2 = 3.0 ， 對 應  (A) 。",
      "B": "3.00 、 (D) 3.000000 ： 浮 點 輸 出 不 會 多 補 零 ， 只 印  3.0 。",
      "C": "3 ： 那 是 整 數 寫 法 ， 但  x 是 浮 點 數 ， 結 果 一 定 帶  .0 。"
    },
    "explanation": "• 程 式 為  x=5.00; print(x-2) ， x 是 浮 點 數  5.0 。\n• 解 題 技 巧 ： 只 要 有 一 邊 是 浮 點 數 ， 運 算 結 果 就 是 浮 點 數 。",
    "category": "python",
    "question_img": "圖片/python/q75_question.png"
  },
  {
    "id": 76,
    "set": 1,
    "original_num": 76,
    "question": "下 列  Python 運 算 式 ， 何 者 不 能 正 確 表 達 數 學 關 係 式  10<a<15 ？",
    "options": {
      "A": "10<a or a<15",
      "B": "a=11 or a=12 or a=13 or a=14",
      "C": "a>10 and a<15",
      "D": "10<a<15"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 10<a or a<15 用  or ， 幾 乎 任 何 數 都 成 立 （ 如  a=100 也 為 真 ） ， 無 法 表 達 ，",
      "C": "a>10 and a<15 ： 用  and 正 確 圈 出  10 到  15 之 間 。",
      "D": "10<a<15 ： Python 連 續 比 較 ， 完 全 等 價 於 原 式 。",
      "B": "逐 一 列 出  11~14 ： 雖 笨 拙 但 確 實 只 涵 蓋 此 範 圍 內 整 數 。"
    },
    "explanation": "• 要 表 達  10<a<15 ， 必 須 同 時 滿 足 「 大 於  10 」 且 「 小 於  15 」 ， 是  and 關 係 。\n故 為 正 解 。",
    "category": "python"
  },
  {
    "id": 77,
    "set": 1,
    "original_num": 77,
    "question": "與 關 係 運 算 式  x==0 完 全 等 價 的 運 算 式 為 何 ？",
    "options": {
      "A": "not x",
      "B": "x",
      "C": "x=0",
      "D": "x!=1"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) not x ： 當  x 為  0 （ False ） 時  not x 為  True ， 與  x==0 完 全 等 價 。",
      "B": "x ： x 為  0 時 為  False ， 正 好 相 反 。",
      "C": "x=0 ： 這 是 指 派 （ 賦 值 ） ， 不 是 比 較 ， 語 意 完 全 不 同 。",
      "D": "x!=1 ： x 為  2 時  x!=1 為 真 但  x==0 為 假 ， 並 不 等 價 。"
    },
    "explanation": "• x==0 是 判 斷  x 是 否 為  0 ； 在 布 林 情 境 中  0 視 為  False 、 非  0 視 為  True 。",
    "category": "python"
  },
  {
    "id": 78,
    "set": 1,
    "original_num": 78,
    "question": "X, Y, Z 表 示 三 角 形 的 三 條 邊 ， 「 三 角 形 任 意 兩 邊 和 大 於 第 三 邊 」 的 運 算 式 是 ？",
    "options": {
      "A": "X+Y>Z and X+Z>Y and Y+Z>X",
      "B": "X+Y>Z or X+Z>Y or Y+Z>X",
      "C": "X+Y>Z",
      "D": "X+Y>Z or X+Z>Y"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) X+Y>Z and X+Z>Y and Y+Z>X ： 三 組 都 成 立 才 構 成 三 角 形 ， 正 確 。",
      "B": "用  or ： 只 要 一 組 成 立 就 為 真 ， 無 法 保 證 全 部 滿 足 。",
      "C": "只 檢 查  X+Y>Z 一 組 ， 條 件 不 完 整 。",
      "D": "只 檢 查 兩 組 且 用  or ， 仍 不 足 以 判 定 三 角 形 。"
    },
    "explanation": "• 「 任 意 兩 邊 和 大 於 第 三 邊 」 必 須 三 組 條 件 「 同 時 」 成 立 ， 要 用  and 連 接 。",
    "category": "python"
  },
  {
    "id": 79,
    "set": 1,
    "original_num": 79,
    "question": "對 於  try 指 令 描 述 ， 何 者 正 確 ？",
    "options": {
      "A": "用 來 捕 捉 例 外",
      "B": "無 論 有 無 例 外 ， 皆 會 將 程 式 執 行 完 畢",
      "C": "搭 配 except 指 令 可 指 定 一 個 例 外 型 別",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) try 的 核 心 用 途 就 是 捕 捉 ( 攔 截 ) 例 外 ， 再 交 給  except 處 理  →  正 確 。",
      "B": "無 論 有 無 例 外 都 會 執 行 的 是  finally ， 不 是  try 本 身 。",
      "C": "except 後 可 指 定 型 別 ， 但 本 題 問 的 是  try 的 描 述  →  不 對 應 。"
    },
    "explanation": "• try 是 例 外 處 理 的 開 頭 區 塊 ， 作 用 是 「 監 看 」 其 中 程 式 碼 有 沒 有 發 生 例 外 。\n• 解 題 技 巧 ： try 負 責 「 試 著 執 行 並 監 看 」 ， except 才 負 責 「 指 定 型 別 並 處 理 」 。",
    "category": "python"
  },
  {
    "id": 80,
    "set": 1,
    "original_num": 80,
    "question": "計 算 以 下 的  Python 數 學 運 算 式 (3 * (1 + 2) ** 3 - (2 ** 3) * 2) 結 果 為 何 ？",
    "options": {
      "A": "65",
      "B": "3",
      "C": "13",
      "D": "15"
    },
    "answer": "A",
    "option_exps": {
      "A": "3*27 - 8*2 = 81 - 16 = 65 →  對 應  (A) 。",
      "B": "(C)(D) 多 半 是 忽 略 次 方 優 先 或 算 錯 括 號 所 得  →  排 除 。"
    },
    "explanation": "• 依 運 算 優 先 序 ： 先 算 括 號 與  ** ， 再 乘 除 ， 最 後 加 減 。\n• (1+2)**3 = 3**3 = 27 ； 2**3 = 8 。\n• 解 題 技 巧 ： ** 的 優 先 序 高 於  * 、 / ， 務 必 先 把 次 方 算 完 。",
    "category": "python"
  },
  {
    "id": 81,
    "set": 1,
    "original_num": 81,
    "question": "關 於  Python 2.x 和  3.x 的 區 別 ， 何 者 有 誤 ？",
    "options": {
      "A": "Python 3.x 可 以 使 用 兩 種 不 等 運 算 子 ： != 和  <>",
      "B": "Python 2.x 有 Unicode 和 非  Unicode 兩 種 字 串 類 型",
      "C": "Python 3.x 只 有 Unicode 一 種 字 串 類 型",
      "D": "Python 2.x 保 留 兩 種 整 數 型 的 資 料 類 型 ： long 和  int 類 型"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) <> 是  Python 2.x 的 不 等 運 算 子 ， Python 3.x 已 移 除 、 只 剩  != →  敘 述 錯",
      "B": "Python 2.x 確 有  str 與  unicode 兩 種 字 串  →  敘 述 正 確 。",
      "C": "Python 3.x 字 串 統 一 為  Unicode →  敘 述 正 確 。",
      "D": "Python 2.x 確 有  int 與  long 兩 種 整 數  →  敘 述 正 確 。"
    },
    "explanation": "• 本 題 問 「 何 者 有 誤 」 ， 要 挑 出 錯 誤 敘 述 。\n誤 ， 正 是 答 案 。",
    "category": "python"
  },
  {
    "id": 82,
    "set": 1,
    "original_num": 82,
    "question": "運 算 式 「 a = 15 % 4 」 ， 變 數  a 會 儲 存 ？",
    "options": {
      "A": "3",
      "B": "5",
      "C": "4",
      "D": "0"
    },
    "answer": "A",
    "option_exps": {
      "A": "15 ÷ 4 = 3 餘  3 ， 故  15 % 4 = 3 →  對 應  (A) 。",
      "C": "4 是 商 不 是 餘 數  →  混 淆  // 與  % 。",
      "B": "(D) 與 實 際 餘 數 不 符  →  排 除 。"
    },
    "explanation": "• % 是 取 餘 數 運 算 子 ， 回 傳 除 法 的 餘 數 。\n• 解 題 技 巧 ： % 取 餘 數 、 // 取 整 數 商 ， 兩 者 別 搞 混 。",
    "category": "python"
  },
  {
    "id": 83,
    "set": 1,
    "original_num": 83,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "1.02.0",
      "B": "3.0",
      "C": "3.000000",
      "D": "error"
    },
    "answer": "A",
    "option_exps": {
      "A": "兩 字 串 首 尾 相 接 得 到  '1.02.0' →  對 應  (A) 。",
      "B": "(C) 是 把 它 們 當 數 字 相 加 (3.0) 的 結 果  →  但 有 引 號 就 不 是 數 字 。",
      "D": "字 串 串 接 合 法 不 會  error →  排 除 。"
    },
    "explanation": "• '1.0' 與  '2.0' 都 是 字 串 ( 被 引 號 包 住 ) ， + 對 字 串 是 「 串 接 」 而 非 相 加 。\n• 解 題 技 巧 ： 看 到 引 號 就 是 字 串 ， + 一 律 當 串 接 處 理 。",
    "category": "python",
    "question_img": "圖片/python/q83_question.png"
  },
  {
    "id": 84,
    "set": 1,
    "original_num": 84,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "12",
      "B": "14",
      "C": "13",
      "D": "11"
    },
    "answer": "A",
    "option_exps": {
      "A": "含 逗 號 與 驚 嘆 號 共  12 字  →  對 應  (A) 。",
      "B": "(C)(D) 多 半 是 漏 算 逗 號 或 驚 嘆 號 所 致  →  排 除 。"
    },
    "explanation": "• len() 回 傳 字 串 的 字 元 總 數 ， 標 點 與 符 號 也 算 一 個 字 元 。\n• 'Hello,World!' 逐 字 數 ： H e l l o , W o r l d ! 共  12 個 。\n• 解 題 技 巧 ： 數 長 度 時 別 漏 掉 標 點 符 號 ， 每 個 都 算  1 。",
    "category": "python",
    "question_img": "圖片/python/q84_question.png"
  },
  {
    "id": 85,
    "set": 1,
    "original_num": 85,
    "question": "運 算 式  5/4*6//5%2 執 行 的 结 果 為 何 ？",
    "options": {
      "A": "1.0",
      "B": "10",
      "C": "True",
      "D": "5"
    },
    "answer": "A",
    "option_exps": {
      "A": "最 終 結 果 為  1.0( 因 含 浮 點 數 而 帶 小 數 ) →  對 應  (A) 。",
      "B": "(D) 忽 略 運 算 順 序 或 型 別  →  排 除 。"
    },
    "explanation": "• 同 優 先 序 的  * / // % 由 左 而 右 依 序 計 算 。\n• 5/4 = 1.25 ； ×6 = 7.5 ； //5 = 1.0 ； %2 = 1.0 。\n• 解 題 技 巧 ： 只 要 式 中 出 現  / ， 結 果 通 常 會 是  float( 帶  .0) 。",
    "category": "python"
  },
  {
    "id": 86,
    "set": 1,
    "original_num": 86,
    "question": "表 示 式  16/4-2**5*8/4%5/2 的 值 為 何 ？",
    "options": {
      "A": "2",
      "B": "20",
      "C": "4",
      "D": "14"
    },
    "answer": "A",
    "option_exps": {
      "A": "4.0 - 2.0 = 2.0( 顯 示 為  2.0) →  對 應  (A) 。",
      "B": "(C)(D) 多 為 忽 略  ** 優 先 或 算 錯 餘 數  →  排 除 。"
    },
    "explanation": "• 先 算  ** ， 再 由 左 至 右 處 理  * / % 。\n• 16/4 = 4.0 ； 2**5 = 32 ； 32*8/4 = 64.0 ； 64.0%5 = 4.0 ； 4.0/2 = 2.0 。\n• 解 題 技 巧 ： ** 最 先 算 ， % 和  / 同 級 時 務 必 由 左 往 右 。",
    "category": "python"
  },
  {
    "id": 87,
    "set": 1,
    "original_num": 87,
    "question": "請 問 運 算 式  5.000000/2.000000 會 出 現 什 麼 結 果 ？",
    "options": {
      "A": "2.5",
      "B": "2.500000",
      "C": "2",
      "D": "3"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0 ÷ 2.0 = 2.5 ， Python 不 會 補 成  2.500000 →  對 應  (A) 。",
      "B": "2.500000 是  C 語 言  printf 的 顯 示 格 式 ， 非  Python 預 設 輸 出 。",
      "C": "(D) 把 結 果 當 整 數  →  與 浮 點 除 法 矛 盾 。"
    },
    "explanation": "• 在  Python 3 ， / 是 浮 點 除 法 ， 結 果 為  float 。\n• 解 題 技 巧 ： Python 浮 點 輸 出 只 保 留 必 要 位 數 ， 不 會 自 動 補 零 。",
    "category": "python"
  },
  {
    "id": 88,
    "set": 1,
    "original_num": 88,
    "question": "你 需 要 接 受 來 自 使 用 者 的 輸 入 並 將 該 資 訊 列 印 到 使 用 者 螢 幕 ， 如 底 下 的 程 式 碼 ， 其 中 包 含 的 行 號 只 是 做\n為 參 考 ， 請 問 在  02 行 編 寫 哪 個 程 式 碼 是 錯 誤 的 ？",
    "options": {
      "A": "input(\"name\")",
      "B": "name = input()",
      "C": "name = input(\"\")",
      "D": "name = input('')"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) input(\"name\") 只 顯 示 提 示 卻 沒 指 定 給  name ， 第  03 行 會  NameError →",
      "B": "name = input() 正 確 把 輸 入 存 入  name 。",
      "C": "name = input(\"\") 用 空 提 示 也 能 正 確 賦 值 。",
      "D": "name = input('') 同 樣 正 確 , 只 是 引 號 不 同 。"
    },
    "explanation": "• 第  03 行 要  print(name) ， 故 第  02 行 必 須 把 輸 入 存 進 變 數  name 。\n這 就 是 錯 誤 寫 法 ( 答 案 ) 。",
    "category": "python",
    "question_img": "圖片/python/q88_question.png"
  },
  {
    "id": 89,
    "set": 1,
    "original_num": 89,
    "question": "在  Python 運 算 式 中 ， 下 列 何 者 能 正 確 表 達 數 學 關 係 ： n 是  m 的 倍 數 ？",
    "options": {
      "A": "n % m == 0",
      "B": "n // m == 0",
      "C": "n % m != 0",
      "D": "n // m != 0"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) n % m == 0 ： 餘 數 為  0 即 代 表 整 除 、 n 是  m 倍 數  →  正 確 。",
      "C": "n % m != 0 表 示 「 除 不 盡 」 →  剛 好 相 反 。",
      "B": "(D) // 取 的 是 整 數 商 , 無 法 判 斷 是 否 整 除  →  用 錯 運 算 子 。"
    },
    "explanation": "• 「 n 是  m 的 倍 數 」 表 示  n 除 以  m 沒 有 餘 數 。\n• 解 題 技 巧 ： 判 斷 倍 數 / 整 除 一 律 用  % ， 看 餘 數 是 否 為  0 。",
    "category": "python"
  },
  {
    "id": 90,
    "set": 1,
    "original_num": 90,
    "question": "下 列 哪 一 個 方 法 可 以 用 來 尋 找 指 定 字 元 ， 並 回 傳 第 一 個 出 現 該 字 元 或 字 串 的 索 引 編 號 ？",
    "options": {
      "A": "find()",
      "B": "strip()",
      "C": "replace",
      "D": "count()"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) find() 會 搜 尋 子 字 串 , 回 傳 第 一 個 出 現 位 置 的 索 引 , 找 不 到 回 傳  -1 →  正 確 。",
      "B": "strip() 是 去 除 字 串 頭 尾 的 空 白 或 指 定 字 元 。",
      "C": "replace 是 把 指 定 子 字 串 替 換 成 另 一 字 串 。",
      "D": "count() 是 計 算 子 字 串 出 現 的 次 數 , 不 回 傳 索 引 。"
    },
    "explanation": "• 解 題 技 巧 ： 要 「 位 置 」 用  find()/index() ， 要 「 次 數 」 用  count() 。",
    "category": "python"
  },
  {
    "id": 91,
    "set": 1,
    "original_num": 91,
    "question": "下 列 何 者 不 是 安 裝  Anaconda 後 會 出 現 的 應 用 ？",
    "options": {
      "A": "PyCharm",
      "B": "Anaconda Navigator",
      "C": "Spyder",
      "D": "Jupyter Notebook"
    },
    "answer": "A",
    "option_exps": {
      "A": "Anaconda 內 建  Navigator 、 Spyder 、 Jupyter Notebook 等 工 具 ， PyCharm 不 在 其",
      "B": "Anaconda Navigator 是  Anaconda 的 圖 形 管 理 介 面 ， 內 建 。",
      "C": "(D) Spyder 與  Jupyter Notebook 都 隨  Anaconda 一 起 安 裝 。"
    },
    "explanation": "中 。\n• PyCharm 是  JetBrains 的 獨 立  IDE ， 須 另 外 下 載 安 裝 ， 與  Anaconda 無 關 。\n• 解 題 技 巧 ： 記 住  Anaconda 三 件 套  Navigator ／ Spyder ／ Jupyter ， 其 餘 多 為 外 掛 。",
    "category": "python"
  },
  {
    "id": 92,
    "set": 1,
    "original_num": 92,
    "question": "請 問  Python 指 令  x=5; x |=2; print(x) 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "7",
      "B": "6",
      "C": "5",
      "D": "4"
    },
    "answer": "A",
    "option_exps": {
      "A": "5 的 二 進 位  101 ， 2 是  010 ， 做  OR 得  111 = 7 ， 對 應  (A) 。",
      "B": "6 是  5+1 或 位 元  AND 的 誤 算 ， 非  OR 結 果 。",
      "C": "5 是 沒 做 運 算 ， ✗  (D) 4 與 位 元  OR 無 關 。"
    },
    "explanation": "• |= 是 位 元  OR 後 再 指 派 ： x = x | 2 。\n• 解 題 技 巧 ： | 是  OR ， 把 兩 數 對 應 位 元 有  1 就 填  1 。",
    "category": "python"
  },
  {
    "id": 93,
    "set": 1,
    "original_num": 93,
    "question": "有 關  Python 變 數 命 名 與 指 派 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "使 用 變 數 時 要 事 先 宣 告 其 資 料 型 態",
      "B": "每 個 變 數 有 其 資 料 型 態",
      "C": "變 數 的 值 是 使 用 等 號 （ = ） 來 指 派",
      "D": "Python 是 區 分 大 小 寫 的 程 式 語 言"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 「 使 用 變 數 要 事 先 宣 告 資 料 型 態 」 描 述 錯 誤 ， 故 為 「 有 誤 」 之 選 項 。",
      "B": "每 個 變 數 確 實 都 有 其 資 料 型 態 （ 由 值 決 定 ） ， 敘 述 正 確 。",
      "C": "Python 用 等 號  = 來 指 派 變 數 值 ， 正 確 。",
      "D": "Python 確 實 區 分 大 小 寫 （ a 與  A 不 同 ） ， 正 確 。"
    },
    "explanation": "• Python 是 動 態 型 別 語 言 ， 變 數 不 需 事 先 宣 告 型 態 ， 賦 值 時 自 動 決 定 。",
    "category": "python"
  },
  {
    "id": 94,
    "set": 1,
    "original_num": 94,
    "question": "下 面 哪 一 個 是 合 法 的 變 數 名 ？",
    "options": {
      "A": "X_yz",
      "B": "123abc",
      "C": "and",
      "D": "X-Y"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) X_yz 全 為 合 法 字 元 且 字 母 開 頭  →  合 法 。",
      "B": "123abc 以 數 字 開 頭  →  不 合 法 。",
      "C": "and 是  Python 保 留 字  →  不 能 當 變 數 名 。",
      "D": "X-Y 含 減 號 （ - ） ， 會 被 當 成 減 法 運 算  →  不 合 法 。"
    },
    "explanation": "• 合 法 變 數 名 須 以 字 母 或 底 線 開 頭 ， 只 能 含 字 母 、 數 字 、 底 線 ， 且 不 能 是 保 留\n字 。",
    "category": "python"
  },
  {
    "id": 95,
    "set": 1,
    "original_num": 95,
    "question": "運 算 式  int (1234.5678*10+0.5)%100 執 行 的 结 果 為 何 ？",
    "options": {
      "A": "46",
      "B": "45",
      "C": "57",
      "D": "56"
    },
    "answer": "A",
    "option_exps": {
      "A": "12346 % 100 = 46 ， 對 應  (A) 。",
      "B": "45 是 少 算  0.5 後  int 為  12345 的 餘 數 ， 但 本 題 有  +0.5 。"
    },
    "explanation": "• 先 算  1234.5678*10+0.5 = 12345.678+0.5 = 12346.178 。\n• int() 直 接 捨 去 小 數 取  12346 ， 再  %100 取 除 以  100 的 餘 數 。\n• 解 題 技 巧 ： %100 取 的 就 是 「 末 兩 位 」 ， 看 整 數  12346 末 兩 位 即  46 。",
    "category": "python"
  },
  {
    "id": 96,
    "set": 1,
    "original_num": 96,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1.0",
      "B": "2.0",
      "C": "3.0",
      "D": "0.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0 % 2 = 1.0 （ 餘 數 運 算 只 要 有 浮 點 數 ， 結 果 就 是 浮 點 ） ， 對 應  (A) 。",
      "B": "(C) 2.0 、 3.0 並 非  5.0 除 以  2 的 餘 數 。",
      "D": "0.0 代 表 整 除 無 餘 ， 但  5.0÷2 餘  1 ， 故 錯 。"
    },
    "explanation": "• %= 是 取 餘 數 後 指 派 ： x = x % 2 ， 且  x 是 浮 點 數  5.0 。\n• 解 題 技 巧 ： 含  float 的 運 算 結 果 一 律 帶 小 數 點 ， 先 刪 沒 小 數 點 的 選 項 。",
    "category": "python",
    "question_img": "圖片/python/q96_question.png"
  },
  {
    "id": 97,
    "set": 1,
    "original_num": 97,
    "question": "數 學 關 係 表 示 式  3 ≤  x < 10 表 示 成 正 確 的  Python 表 示 式 為 何 ？",
    "options": {
      "A": "3<=x and x<10",
      "B": "3<=x or x<10",
      "C": "3<=x or <10",
      "D": "3<=x and <10"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 3<=x and x<10 ： 兩 邊 都 是 合 法 比 較 式 、 以  and 連 接  →  正 確 。",
      "B": "用  or （ 或 ） ， 只 要 一 邊 成 立 就 為 真 ， 不 符 合 「 同 時 」 的 範 圍 限 制 。",
      "C": "(D) 「 or <10 」「 and <10 」 缺 少 左 運 算 元 ， 語 法 本 身 就 錯 誤 。"
    },
    "explanation": "• 數 學 的  3 ≤  x < 10 需 同 時 滿 足  x ≥ 3 且  x<10 ， 必 須 用  and 連 接 兩 個 完 整 比 較\n式 。\n• 解 題 技 巧 ： 連 續 範 圍 一 律 用  and ； 每 個 比 較 都 要 寫 成 完 整 的 「 變 數  運 算 子\n值 」 。",
    "category": "python"
  },
  {
    "id": 98,
    "set": 1,
    "original_num": 98,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "6.0",
      "B": "6",
      "C": "1",
      "D": "1.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0 + 1 = 6.0 ， 浮 點 數 加 整 數 仍 是 浮 點 數 ， 對 應  (A) 。",
      "B": "6 沒 有 小 數 點 ， 與  float 運 算 結 果 不 符 。",
      "C": "(D) 1 、 1.0 都 不 是  5.0 加  1 的 結 果 。"
    },
    "explanation": "• += 是 累 加 後 指 派 ： x = x + 1 ， 且  x 起 始 為 浮 點 數  5.0 。\n• 解 題 技 巧 ： 只 要 其 中 一 個 運 算 元 是  float ， 結 果 必 為  float （ 帶  .0 ） 。",
    "category": "python",
    "question_img": "圖片/python/q98_question.png"
  },
  {
    "id": 99,
    "set": 1,
    "original_num": 99,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "2",
      "B": "3",
      "C": "2.5",
      "D": "2.50000"
    },
    "answer": "A",
    "option_exps": {
      "A": "5 // 2 = 2 （ 兩 個 整 數 相 除 取 整 數 商 ） ， 對 應  (A) 。",
      "B": "3 是 進 位 的 誤 算 ， // 是 無 條 件 捨 去 而 非 四 捨 五 入 。",
      "C": "(D) 2.5 、 2.50000 是 一 般 除 法  / 的 結 果 ， 本 題 用 的 是  // 。"
    },
    "explanation": "• // 是 整 數 除 法 （ floor division ） ， 結 果 向 下 取 整 。\n• 解 題 技 巧 ： // 是 取 「 商 的 整 數 部 分 」 ， 整 數  // 整 數  →  整 數 ， 無 小 數 。",
    "category": "python",
    "question_img": "圖片/python/q99_question.png"
  },
  {
    "id": 100,
    "set": 1,
    "original_num": 100,
    "question": "請 問 以 下 程 式 會 輸 出 什 麼 結 果 ？",
    "options": {
      "A": "error",
      "B": "abcabcabcabcabc",
      "C": "5.0*'abc'",
      "D": "5.0abc"
    },
    "answer": "A",
    "option_exps": {
      "A": "5.0 是 浮 點 數 ， 'abc' 無 法 乘 以  float →  拋 出  TypeError ， 對 應  (A) error 。",
      "B": "abcabcabcabcabc 要  5*'abc' （ 整 數 ） 才 成 立 ， 本 題 是  5.0 。",
      "C": "(D) Python 不 會 把 式 子 原 樣 印 出 ， 會 直 接 報 錯 。"
    },
    "explanation": "• 字 串 可 被 「 整 數 」 重 複 （ 如  3*'abc' ） ， 但 乘 數 必 須 是 整 數 。\n• 解 題 技 巧 ： 序 列 重 複 只 接 受  int ， 乘 數 帶 小 數 點 即  TypeError 。",
    "category": "python",
    "question_img": "圖片/python/q100_question.png"
  },
  {
    "id": 101,
    "set": 2,
    "original_num": 1,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "(4+3)^2)=49",
      "B": "({4}+{3})^2)={49}",
      "C": "(3.0+4.0)^2.0)=49.0",
      "D": "({3}+{4})^2)={49}"
    },
    "answer": "A",
    "option_exps": {
      "A": "結 果 為 「 (4+3)^2)=49 」 ， 對 應  (A) 。",
      "B": "(D) {} 已 被  format 替 換 ， 不 會 在 輸 出 保 留 大 括 號 。",
      "C": "x 、 y 、 result 都 是 整 數 ， 輸 出 不 會 帶  .0 。"
    },
    "explanation": "• x,y=4,3 ； result=x*x+2*x*y+y*y = 16+24+9 = 49 。\n• format 把  {} 依 序 代 入  x 、 y 、 result ， 字 串 其 餘 字 元 原 樣 輸 出 。",
    "category": "python",
    "question_img": "圖片/python/q101_question.png"
  },
  {
    "id": 102,
    "set": 2,
    "original_num": 2,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "apple\nbanana\ncherry",
      "B": "x",
      "C": "error",
      "D": "['apple', 'banana', 'cherry']"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 依 序 輸 出 三 行  apple 、 banana 、 cherry →  正 解 。",
      "D": "['apple','banana','cherry'] 是 整 個  list 的 長 相 ； 這 裡 印 的 是 「 元 素 」 而 非 整 串 。",
      "B": "x 是 把 變 數 值 印 出 ， 不 會 印 出 字 母 「 x 」 本 身 。",
      "C": "error ： 程 式 完 全 合 法 、 不 會 出 錯 。"
    },
    "explanation": "• for x in lst 會 逐 一 取 出 元 素 ， print(x) 把 每 個 元 素 各 自 印 成 一 行 。\n• 解 題 技 巧 ： for 搭 配  print(x) 就 是 「 逐 一 印 出 元 素 」 ， 每 個 各 佔 一 行 。",
    "category": "python",
    "question_img": "圖片/python/q102_question.png"
  },
  {
    "id": 103,
    "set": 2,
    "original_num": 3,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "True",
      "C": "TypeError",
      "D": "NameError"
    },
    "answer": "B",
    "option_exps": {
      "B": "集 合 會 自 動 去 重 ， 重 複 的  'addr' 、 ' 高 雄 ' 不 影 響  ' 台 北 ' 是 否 存 在  →  印 出",
      "A": "False 表 示 不 存 在 ， 但  ' 台 北 ' 明 明 在 集 合 內 。",
      "C": "(D) 沒 有 型 別 錯 誤 也 沒 有 未 定 義 變 數  →  不 會  TypeError/NameError 。"
    },
    "explanation": "• 大 括 號  {…} 且 元 素 彼 此 用 逗 號 分 隔 、 非  key:value 配 對 ， 這 是  set （ 集 合 ） 。\n• in 運 算 子 檢 查 元 素 是 否 存 在 於 集 合 中 ， ' 台 北 ' 確 實 是 集 合 的 一 員 。\nTrue ， 對 應  (B) 。",
    "category": "python",
    "question_img": "圖片/python/q103_question.png"
  },
  {
    "id": 104,
    "set": 2,
    "original_num": 4,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "['Python', 'Thanks', 'flexibility', 'of', 'the', 'to']",
      "B": "顯 示 執 行 錯 誤",
      "C": "['flexibility', 'of', 'Python', 'Thanks', 'the', 'to']",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "大 寫 字 母  ASCII(65–90) 比 小 寫 (97–122) 小 ， 故  'Python' 、 'Thanks' 排 在 所 有 小 寫 字",
      "C": "是 忽 略 大 小 寫 排 序 才 有 的 順 序 ， 與 實 際 不 符 。",
      "B": "程 式 完 全 合 法 ， 不 會 出 錯 。",
      "D": "既 然  (A) 正 確 ， 「 以 上 皆 非 」 不 成 立 。"
    },
    "explanation": "• split() 先 把 句 子 拆 成 單 字 串 列 ， sorted() 再 依 字 元 編 碼 排 序 。\n前  →  (A) 。\n• 解 題 技 巧 ： Python 預 設 排 序 ， 大 寫 一 定 排 在 小 寫 前 面 。",
    "category": "python",
    "question_img": "圖片/python/q104_question.png"
  },
  {
    "id": 105,
    "set": 2,
    "original_num": 5,
    "question": "請 寫 出 底 下 程 式 碼 的 輸 出 結 果",
    "options": {
      "A": "{'name': 'Axel', 'weight': '80KG'}",
      "B": "{'name': 'Axel', 'height': '185cm'}",
      "C": "{'name': 'Axel', 'weight': '80KG', 'height': '185cm'}",
      "D": "{'name': 'Axel', 'weight': '75KG', 'height': '185cm'}"
    },
    "answer": "D",
    "option_exps": {
      "D": "weight 被  d4 覆 蓋 成  '75KG' ， height 新 增 為  '185cm' ， name 保 留  →  對 應  (D) 。",
      "A": "只 剩 原 本 的  weight 80KG ， 沒 做 合 併  →  錯 。",
      "B": "漏 掉  weight 、 也 沒 覆 蓋  →  不 符  update 行 為 。",
      "C": "weight 仍 是  80KG ， 沒 被  d4 覆 蓋  →  錯 。"
    },
    "explanation": "• dict.update(d4) 會 把  d4 的 鍵 值 合 併 進  d3 ： 相 同 的 鍵 覆 蓋 、 沒 有 的 鍵 新 增 。\n• 解 題 技 巧 ： update 的 口 訣 是 「 有 就 覆 蓋 、 沒 有 就 新 增 」 。",
    "category": "python",
    "question_img": "圖片/python/q105_question.png"
  },
  {
    "id": 106,
    "set": 2,
    "original_num": 6,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "[5, 4, 2, 1]",
      "B": "1, 2, 4, 5",
      "C": "5, 4, 2, 1",
      "D": "[1, 2, 4, 5]"
    },
    "answer": "D",
    "option_exps": {
      "D": "[1,4,2,5] 排 序 後 變 成  [1,2,4,5] ， print(L) 印 出 整 個 串 列  →  對 應  (D) 。",
      "A": "[5,4,2,1] 是 由 大 到 小 ， sort() 預 設 是 遞 增 。",
      "B": "(C) 印 出 的 是 不 含 中 括 號 的 形 式  →  印  list 物 件 一 定 帶  [ ] 。"
    },
    "explanation": "• list.sort() 會 就 地 （ in-place ） 由 小 到 大 排 序 ， 並 回 傳  None 。\n• 解 題 技 巧 ： sort() 改 原 串 列 、 預 設 遞 增 ； 要 遞 減 需  reverse=True 。",
    "category": "python",
    "question_img": "圖片/python/q106_question.png"
  },
  {
    "id": 107,
    "set": 2,
    "original_num": 7,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "banana",
      "B": "apple",
      "C": "cherry",
      "D": "' '"
    },
    "answer": "A",
    "option_exps": {
      "A": "lst[-1] 取 最 後 一 個 元 素 ， 即  'banana' →  對 應  (A) 。",
      "B": "apple 是 第 一 個 （ lst[0] ） ， 不 是 最 後 一 個 。",
      "C": "cherry 已 被  pop() 移 除 。",
      "D": "串 列 非 空 ， lst[-1] 不 會 是 空 白 。"
    },
    "explanation": "• list.pop() 不 給 索 引 時 ， 預 設 移 除 並 回 傳 「 最 後 一 個 」 元 素 。\n• pop() 移 除  'cherry' 後 ， lst 變 成  ['apple','banana'] 。",
    "category": "python",
    "question_img": "圖片/python/q107_question.png"
  },
  {
    "id": 108,
    "set": 2,
    "original_num": 8,
    "question": "關 於  tuple 序 對 資 料 型 態 的 陳 述 ， 下 列 何 者 不 正 確 ？",
    "options": {
      "A": "「 * 」 運 算 子 可 以 複 製 序 對 的 元 素 成 多 個",
      "B": "序 對 內 的 元 素 可 以 用  [ ] 運 算 子 來 改 變 元 素 的 值",
      "C": "序 對 可 以 存 放 不 同 資 料 型 態 的 元 素",
      "D": "tuple 是 有 序 物 件"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) 用  [ ] 只 能 讀 取 元 素 、 不 能 改 值 ， 企 圖 賦 值 會  TypeError →  這 敘 述 錯 誤 ， 正 是 答",
      "A": "正 確 ： * 運 算 子 可 重 複 序 對 ， 如  (1,2)*3 。",
      "C": "正 確 ： tuple 可 混 放 不 同 型 別 的 元 素 。",
      "D": "正 確 ： tuple 是 有 序 物 件 ， 可 用 索 引 存 取 。"
    },
    "explanation": "• 題 目 問 「 不 正 確 」 的 敘 述 。 tuple 一 旦 建 立 就 不 可 變 （ immutable ） 。\n案 。\n• 解 題 技 巧 ： tuple 與  list 最 大 差 別 就 是 「 不 可 修 改 」 。",
    "category": "python"
  },
  {
    "id": 109,
    "set": 2,
    "original_num": 9,
    "question": "假 設  lst=['a', 'b', 'c', 'd'] ，  請 問  len(lst) 是 多 少 ？",
    "options": {
      "A": "1",
      "B": "3",
      "C": "2",
      "D": "4"
    },
    "answer": "D",
    "option_exps": {
      "D": "len(lst)=4 →  對 應  (D) 。",
      "A": "(B)(C) 1 、 3 、 2 都 少 算 了 元 素 數 量 。"
    },
    "explanation": "• len() 回 傳 容 器 內 的 元 素 個 數 。\n• lst 共 有  'a','b','c','d' 四 個 元 素 。",
    "category": "python"
  },
  {
    "id": 110,
    "set": 2,
    "original_num": 10,
    "question": "令  score = (5, 7, 4, 9, 3) ， 請 問 哪 一 個 索 引 可 以 正 確 取 用 值  9 ？",
    "options": {
      "A": "score[4]",
      "B": "score(4)",
      "C": "score(3)",
      "D": "score[3]"
    },
    "answer": "D",
    "option_exps": {
      "D": "值  9 在 索 引  3 ， 故  score[3] 正 確  →  對 應  (D) 。",
      "A": "score[4] 取 到 的 是  3 ， 不 是  9 。",
      "B": "(C) 用 小 括 號  score(…) 是 函 式 呼 叫 語 法 ， 會  TypeError 。"
    },
    "explanation": "• tuple 取 值 用 「 中 括 號  [ ] 」 加 索 引 ， 索 引 從  0 起 算 。\n• score=(5,7,4,9,3) ： 索 引  0 → 5 、 1 → 7 、 2 → 4 、 3 → 9 、 4 → 3 。",
    "category": "python"
  },
  {
    "id": 111,
    "set": 2,
    "original_num": 11,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "20",
      "B": "TypeError",
      "C": "Mary",
      "D": "台 北"
    },
    "answer": "C",
    "option_exps": {
      "C": "print(name) 印 出  'Mary' ， 但 選 項 對 應 的 正 解 標 示 為  (C) 。"
    },
    "explanation": "• data 是  tuple ， name, age, addr = data 是 「 序 列 解 包 （ unpacking ）」 。\n• 依 序 對 應 ： name=\"Mary\" 、 age=\"20\" 、 addr=\" 台 北 \" 。\n• 解 包 要 求 左 邊 變 數 數 與 右 邊 元 素 數 相 等 ， 這 裡  3 對  3 沒 問 題 。\n✗ 不 會  TypeError ， 因 為 元 素 數 與 變 數 數 一 致 。",
    "category": "python",
    "question_img": "圖片/python/q111_question.png"
  },
  {
    "id": 112,
    "set": 2,
    "original_num": 12,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "tomato",
      "B": "cherry",
      "C": "apple",
      "D": "banana"
    },
    "answer": "A",
    "option_exps": {
      "A": "lst[-1] 取 最 後 一 個 ， 即 新 加 入 的  'tomato' →  對 應  (A) 。",
      "B": "cherry 變 成 倒 數 第 二 個 。",
      "C": "(D) apple 、 banana 在 更 前 面 ， 不 是 最 後 一 個 。"
    },
    "explanation": "• list.append() 把 元 素 加 到 串 列 「 最 後 面 」 。\n• append('tomato') 後  lst=['apple','banana','cherry','tomato'] 。",
    "category": "python",
    "question_img": "圖片/python/q112_question.png"
  },
  {
    "id": 113,
    "set": 2,
    "original_num": 13,
    "question": "關 於  list 串 列 資 料 型 態 的 陳 述 ， 下 列 何 者 不 正 確 ？",
    "options": {
      "A": "不 可 以 包 含 不 同 的 資 料 型 別",
      "B": "Python 提 供 生 成 式 ， 是 一 種 建 立 串 列 更 快 速 彈 性 的 作 法",
      "C": "類 似 其 他 程 式 語 言 的 陣 列 結 構",
      "D": "一 串 由 逗 號 分 隔 的 值"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 「 不 可 包 含 不 同 資 料 型 別 」 是 錯 的 ： list 本 來 就 能 混 放 各 種 型 別  →  正 是 答",
      "B": "正 確 ： Python 確 有 生 成 式 （ comprehension ） ， 建 立 串 列 更 快 更 彈 性 。",
      "C": "正 確 ： list 類 似 其 他 語 言 的 陣 列 。",
      "D": "正 確 ： list 就 是 一 串 以 逗 號 分 隔 的 值 。"
    },
    "explanation": "• 題 目 問 「 不 正 確 」 的 敘 述 。\n案 。",
    "category": "python"
  },
  {
    "id": 114,
    "set": 2,
    "original_num": 14,
    "question": "range(2,8) 會 產 生 下 列 哪 一 個 串 列 ？",
    "options": {
      "A": "[2, 3, 4, 5, 6, 7]",
      "B": "[2, 3, 4, 5, 6, 7, 8]",
      "C": "[1, 2, 3, 4, 5, 6, 7]",
      "D": "[2, 8]"
    },
    "answer": "A",
    "option_exps": {
      "A": "對 應  (A) [2,3,4,5,6,7] 。",
      "B": "多 含 了  8 →  違 反 「 不 含  stop 」 。",
      "C": "從  1 開 始  →  start 應 為  2 。",
      "D": "[2,8] 把 它 誤 當 成 只 取 頭 尾 兩 數 。"
    },
    "explanation": "• range(start, stop) 會 產 生 從  start 到  stop-1 的 整 數 ， 不 含  stop 。\n• range(2,8) →  2,3,4,5,6,7 （ 到  7 為 止 ， 不 含  8 ） 。",
    "category": "python"
  },
  {
    "id": 115,
    "set": 2,
    "original_num": 15,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "'apple'",
      "B": "[ ]",
      "C": "[' ']",
      "D": "'banana'"
    },
    "answer": "B",
    "option_exps": {
      "B": "print(lst) 印 出 空 串 列  [ ] →  對 應  (B) 。",
      "A": "(D) 'apple' 、 'banana' 都 已 被 刪 光 。",
      "C": "[' '] 是 含 一 個 空 白 字 串 的 串 列 ， 並 非 真 正 的 空 串 列 。"
    },
    "explanation": "• del lst[:] 使 用 切 片 刪 除 「 全 部 元 素 」 ， 等 同 清 空 串 列 。\n• 刪 除 後  lst 仍 是 同 一 個  list 物 件 ， 只 是 內 容 為 空 。\n• 解 題 技 巧 ： del lst[:] 與  lst.clear() 效 果 相 同 ， 結 果 為  [] 。",
    "category": "python",
    "question_img": "圖片/python/q115_question.png"
  },
  {
    "id": 116,
    "set": 2,
    "original_num": 16,
    "question": "假 設  lst=[1, 4, 2, 5] ，  請 問  print(lst[0:2]) 會 印 出 什 麼 ？",
    "options": {
      "A": "[1, 4, 2]",
      "B": "1, 4",
      "C": "[1, 4]",
      "D": "1, 4, 2"
    },
    "answer": "C",
    "option_exps": {
      "C": "lst[0]=1 、 lst[1]=4 →  印 出  [1, 4] ， 對 應  (C) 。",
      "A": "(D) 多 取 了 索 引  2 的  2 ， 切 片 不 含 結 尾 索 引 。",
      "B": "少 了 中 括 號  →  切 片 結 果 一 定 是  list 。"
    },
    "explanation": "• 切 片  lst[0:2] 取 索 引  0 到  1 （ 不 含  2 ） ， 結 果 仍 是  list 。\n• 解 題 技 巧 ： a[i:j] 取  i 到  j-1 ， 且 回 傳 值 保 留  list 型 態 。",
    "category": "python"
  },
  {
    "id": 117,
    "set": 2,
    "original_num": 17,
    "question": "假 設  s1 = {\"a\", \"b\", \"c\"} ，  s2 = {\"b\", \"c\", \"e\"} ， 請 問  print(s1 | s2) 會 印 出 什 麼 ？",
    "options": {
      "A": "{\"a\", \"b\", \"e\", \"c\"}",
      "B": "{\"a\"}",
      "C": "{\"a\", \"e\"}",
      "D": "{\"c\", \"b\"}"
    },
    "answer": "A",
    "option_exps": {
      "A": "s1 ∪ s2 = {a, b, c, e} （ b 、 c 重 複 只 算 一 次 ） ， 對 應  (A) 。",
      "B": "(C) 漏 掉 了  b 、 c 等 元 素 。",
      "D": "只 剩 交 集 元 素 ， 與 聯 集 相 反 。"
    },
    "explanation": "• | 是 集 合 的 聯 集 ， 取 兩 集 合 所 有 不 重 複 元 素 。\n• 集 合 無 序 ， 元 素 排 列 順 序 不 影 響 正 確 性 。",
    "category": "python"
  },
  {
    "id": 118,
    "set": 2,
    "original_num": 18,
    "question": "令  fruit = (\"Apple\" , \"Orange\" , \"Banana\" , \"Lemon\") ， 請 問  print(fruit[1]) 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "Banana",
      "B": "Lemon",
      "C": "Apple",
      "D": "Orange"
    },
    "answer": "D",
    "option_exps": {
      "D": "fruit[0]=Apple 、 fruit[1]=Orange →  印 出  Orange ， 對 應  (D) 。",
      "C": "Apple 是  fruit[0] ， 不 是  [1] 。",
      "A": "Banana 是  fruit[2] 。",
      "B": "Lemon 是  fruit[3] 。"
    },
    "explanation": "• 元 組 索 引 從  0 起 算 ， fruit[1] 取 第 二 個 元 素 。",
    "category": "python"
  },
  {
    "id": 119,
    "set": 2,
    "original_num": 19,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "error",
      "B": "['a', 'b', 'c', '1', '2', '3']",
      "C": "[1, 2, 3]",
      "D": "['a', 'b', 'c', 1, 2, 3]"
    },
    "answer": "D",
    "option_exps": {
      "D": "['a','b','c'] 接 上  [1,2,3] →  ['a', 'b', 'c', 1, 2, 3] ， 對 應  (D) 。",
      "A": "list + list 完 全 合 法 ， 不 會  error 。",
      "B": "數 字 不 會 被 轉 成 字 串  '1' 、 '2' 、 '3' 。",
      "C": "串 接 是 保 留 全 部 元 素 ， 不 會 只 剩 數 字 。"
    },
    "explanation": "• 兩 個  list 用  + 是 「 串 接 」 ， 把 元 素 接 在 一 起 ， 不 會 做 型 別 轉 換 。",
    "category": "python",
    "question_img": "圖片/python/q119_question.png"
  },
  {
    "id": 120,
    "set": 2,
    "original_num": 20,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "[7, 6, 5, 4, 3, 2, 1]",
      "B": "[1, 2, 3, 4, 5, 6, 7]",
      "C": "顯 示 執 行 錯 誤",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "把  [5,3,7,1,6,2,4] 升 冪 排 序  →  [1, 2, 3, 4, 5, 6, 7] ， 對 應  (B) 。",
      "A": "那 是 降 冪 結 果 ， 需  reverse=True 才 會 如 此 。",
      "C": "sorted() 對 數 字  list 合 法 ， 不 會 出 錯 。"
    },
    "explanation": "• sorted() 回 傳 一 個 由 小 到 大 排 序 的 「 新  list 」 ， 不 改 動 原  list 。\n• 解 題 技 巧 ： sorted() 預 設 升 冪 ， 要 降 冪 才 加  reverse=True 。",
    "category": "python",
    "question_img": "圖片/python/q120_question.png"
  },
  {
    "id": 121,
    "set": 2,
    "original_num": 21,
    "question": "令  score = (5, 7, 4, 9, 3) ， 請 問  score[1]+score[3] 是 哪 一 個 值 ？",
    "options": {
      "A": "14",
      "B": "10",
      "C": "16",
      "D": "9"
    },
    "answer": "C",
    "option_exps": {
      "C": "7 + 9 = 16 ， 對 應  (C) 。",
      "A": "14 是 把  score[1] 當 成  5 、 加 上  9 之 類 的 誤 算 。",
      "B": "10 取 錯 索 引 （ 如  score[0]+score[2] ） 。",
      "D": "9 只 取 了 單 一 元 素 。"
    },
    "explanation": "• 元 組 索 引 從  0 起 算 ： score[1]=7 、 score[3]=9 。",
    "category": "python"
  },
  {
    "id": 122,
    "set": 2,
    "original_num": 22,
    "question": "下 列 選 項 哪 一 個 產 生 的 結 果  a 和 其 他 不 同 ？",
    "options": {
      "A": "a=set({\"name\":\"Mary\", \"age\":\"20\", \"addr\":\" 台 北 \"})",
      "B": "a={\"Mary\", \"20\", \" 台 北 \"}",
      "C": "a=set((\"Mary\", \"20\", \" 台 北 \"))",
      "D": "a=set([\"Mary\", \"20\", \" 台 北 \"])"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) set({...}) 得 到  {'name','age','addr'} ， 與 其 他 三 者 不 同  →  對 應  (A) 。",
      "B": "直 接 寫 出  {'Mary','20',' 台 北 '} 的 集 合 。",
      "C": "set(tuple) 把 元 組 元 素 變 集 合  →  同 上 內 容 。",
      "D": "set(list) 把  list 元 素 變 集 合  →  同 上 內 容 。"
    },
    "explanation": "• set() 套 用 在  dict 上 ， 只 會 取 出 「 鍵 」 而 非 值 。",
    "category": "python"
  },
  {
    "id": 123,
    "set": 2,
    "original_num": 23,
    "question": "假 設  lst=['a', 'b', 'c'] ，  請 問  print(lst[2]) 會 印 出 什 麼 ？",
    "options": {
      "A": "c",
      "B": "b",
      "C": "'c'",
      "D": "'b'"
    },
    "answer": "A",
    "option_exps": {
      "A": "lst[2] 是  'c' ， 印 出 時 顯 示  c ， 對 應  (A) 。",
      "B": "b 是  lst[1] ， 索 引 取 錯 。",
      "C": "print 不 會 印 出 外 層 引 號  'c' 。",
      "D": "既 取 錯 索 引 又 多 了 引 號 。"
    },
    "explanation": "• lst[2] 取 索 引  2 的 元 素 ， print 印 字 串 時 不 含 引 號 。",
    "category": "python"
  },
  {
    "id": 124,
    "set": 2,
    "original_num": 24,
    "question": "令  num=[[1,2,3],[4,5,6],[7,8,9]] ， 請 問 下 列 哪 一 個 索 引  num[1][2] 是 哪 一 個 值 ？",
    "options": {
      "A": "5",
      "B": "6",
      "C": "2",
      "D": "3"
    },
    "answer": "B",
    "option_exps": {
      "B": "結 果 為  6 ， 對 應  (B) 。",
      "A": "5 是  num[1][1] 。",
      "C": "(D) 2 、 3 屬 於 第  0 列  num[0] 。"
    },
    "explanation": "• 二 維 索 引  num[1][2] ： 先 取 第  1 列 ， 再 取 該 列 第  2 欄 。\n• num[1] = [4,5,6] ， 再 取  [2] →  6 。",
    "category": "python"
  },
  {
    "id": 125,
    "set": 2,
    "original_num": 25,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "顯 示 執 行 錯 誤",
      "B": "['flexibility', 'of', 'Python', 'Thanks', 'the', 'to']",
      "C": "['Python', 'Thanks', 'flexibility', 'of', 'the', 'to']",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "以 大 寫 比 較 排 序 ： flexibility, of, Python, Thanks, the, to ， 對 應  (B) 。",
      "C": "是 直 接 照 原 字 串 大 小 寫 排 序 （ 大 寫 字 母 排 前 ） 的 結 果 。",
      "A": "(D) 順 序 與 忽 略 大 小 寫 排 序 不 符 。"
    },
    "explanation": "• split() 把 句 子 切 成 單 字  list ， key=str.upper 表 示 「 忽 略 大 小 寫 」 排 序 。\n• key 只 影 響 比 較 ， 回 傳 的 字 仍 保 留 原 本 大 小 寫 。",
    "category": "python",
    "question_img": "圖片/python/q125_question.png"
  },
  {
    "id": 126,
    "set": 2,
    "original_num": 26,
    "question": "令  fruit = (\"Apple\" , \"Orange\" , \"Banana\" , \"Lemon\") ， 請 問  len(fruit) 是 哪 一 個 值 ？",
    "options": {
      "A": "3",
      "B": "TypeError",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "option_exps": {
      "C": "len(fruit) = 4 ， 對 應  (C) 。",
      "B": "元 組 支 援  len() ， 不 會  TypeError 。",
      "A": "(D) 3 、 5 都 數 錯 了 元 素 數 量 。"
    },
    "explanation": "• len() 回 傳 元 組 的 元 素 個 數 。\n• fruit 含  Apple 、 Orange 、 Banana 、 Lemon 共  4 個 元 素 。",
    "category": "python"
  },
  {
    "id": 127,
    "set": 2,
    "original_num": 27,
    "question": "執 行 以 下 的 程 式 碼 ：  請 問 輸 出 列 印 的 內 容 為 何 ？",
    "options": {
      "A": "7",
      "B": "9",
      "C": "True",
      "D": "False"
    },
    "answer": "D",
    "option_exps": {
      "D": "8 in numList 為  False ， 對 應  (D) 。",
      "C": "8 不 在  list 中 ， 不 會 是  True 。",
      "A": "(B) in 回 傳 布 林 值 ， 不 會 印 出 數 字  7 或  9 。"
    },
    "explanation": "• in 運 算 子 用 來 判 斷 某 值 是 否 在 序 列 中 ， 回 傳  True/False 。\n• numList=[1,3,5,7,9] 全 是 奇 數 ， 沒 有  8 。",
    "category": "python",
    "question_img": "圖片/python/q127_question.png"
  },
  {
    "id": 128,
    "set": 2,
    "original_num": 28,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "{\"a\", \"f\", \"g\", \"c\"}",
      "B": "{\"a\", \"c\"}",
      "C": "{\"a\", \"f\", \"g\", \"b\", \"e\", \"c\"}",
      "D": "{\"e\", \"b\"}"
    },
    "answer": "A",
    "option_exps": {
      "A": "剩 下  a 、 c 、 f 、 g →  對 應  (A){\"a\",\"f\",\"g\",\"c\"} 。",
      "B": "{\"a\",\"c\"} 是 差 集  set1-set2 ； (D){\"e\",\"b\"} 是 交 集 。",
      "C": "是 聯 集 （ 含 全 部  6 個 元 素 ） →  不 是 對 稱 差 。"
    },
    "explanation": "• set1={\"a\",\"b\",\"c\",\"e\"} 、 set2={\"b\",\"e\",\"f\",\"g\"} ， ^ 是 「 對 稱 差 集 」 。\n• 對 稱 差 集  = 只 出 現 在 其 中 一 邊 、 兩 邊 都 有 的 不 算 ： b 、 e 兩 邊 都 有 故 排 除 。\n• 解 題 技 巧 ： ^ 對 稱 差 、 & 交 集 、 | 聯 集 ， 三 者 要 分 清 楚 。",
    "category": "python",
    "question_img": "圖片/python/q128_question.png"
  },
  {
    "id": 129,
    "set": 2,
    "original_num": 29,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "NameError",
      "B": "TypeError",
      "C": "True",
      "D": "False"
    },
    "answer": "C",
    "option_exps": {
      "C": "'addr' in data 成 立  →  印 出  True →  對 應  (C) 。",
      "D": "False ： 誤 以 為 找 不 到 鍵 ； 其 實  addr 存 在 。",
      "A": "(B) NameError/TypeError ： 語 法 完 全 合 法 ， 不 會 報 錯 。"
    },
    "explanation": "• in 用 於 字 典 時 ， 是 檢 查 「 鍵 (key) 」 是 否 存 在 ， 不 是 檢 查 值 。\n• data 的 鍵 有  name 、 age 、 addr ， 'addr' 確 實 是 其 中 一 個 鍵 。",
    "category": "python",
    "question_img": "圖片/python/q129_question.png"
  },
  {
    "id": 130,
    "set": 2,
    "original_num": 30,
    "question": "假 設  data = {\"name\":\"Mary\", \"age\":\"20\", \"addr\":\" 台 北 \", \"addr\":\" 高 雄 \"} ，  請 問  print(len(data)]) 會 印 出 什 麼 ？",
    "options": {
      "A": "TypeError",
      "B": "5",
      "C": "4",
      "D": "3"
    },
    "answer": "D",
    "option_exps": {
      "D": "最 終 鍵 為  name 、 age 、 addr 共  3 個  →  len 為  3 →  對 應  (D) 。",
      "C": "4 ： 把 重 複 的  addr 算 成 兩 個  →  錯 誤 。",
      "A": "TypeError ： 重 複 鍵 不 會 報 錯 ， 只 是 覆 蓋 。"
    },
    "explanation": "• 字 典 的 鍵 不 可 重 複 ， 若 寫 了 重 複 鍵 ， 後 者 會 覆 蓋 前 者 。\n• addr 出 現 兩 次 ， \" 高 雄 \" 覆 蓋  \" 台 北 \" ， 實 際 只 剩 一 個  addr 鍵 。\n• 解 題 技 巧 ： 字 典 重 複 鍵 不 報 錯 ， 只 保 留 最 後 一 筆 。",
    "category": "python"
  },
  {
    "id": 131,
    "set": 2,
    "original_num": 31,
    "question": "令  fruit = (\"Apple\" , \"Orange\" , \"Banana\" , \"Lemon\") ， 請 問  fruit[2] 是 什 麼 ？",
    "options": {
      "A": "Lemon",
      "B": "Apple",
      "C": "Orange",
      "D": "Banana"
    },
    "answer": "D",
    "option_exps": {
      "D": "fruit[2] 取 第  3 個 元 素  →  Banana →  對 應  (D) 。",
      "C": "Orange 是  [1] ； (B) Apple 是  [0] →  索 引 算 錯 。",
      "A": "Lemon 是  [3] →  多 算 一 格 。"
    },
    "explanation": "• tuple 的 索 引 從  0 開 始 ： [0]=Apple 、 [1]=Orange 、 [2]=Banana 。\n• 解 題 技 巧 ： 索 引 值  = 順 序 數  - 1 ， 第  3 個 就 是  [2] 。",
    "category": "python"
  },
  {
    "id": 132,
    "set": 2,
    "original_num": 32,
    "question": "假 設  lst=['a', 'b', 'c'] ，  請 問  print('b' in lst) 會 印 出 什 麼 ？",
    "options": {
      "A": "0",
      "B": "False",
      "C": "True",
      "D": "1"
    },
    "answer": "C",
    "option_exps": {
      "C": "'b' in lst 成 立  →  印 出  True →  對 應  (C) 。",
      "B": "False ： 誤 判  'b' 不 在 串 列 裡 。",
      "A": "(D) 0/1 ： in 回 傳 的 是  True/False ， 不 是  0/1 。"
    },
    "explanation": "• in 用 於 串 列 時 回 傳 布 林 值 ， 檢 查 元 素 是 否 在 串 列 中 。\n• lst=['a','b','c'] 確 實 包 含  'b' 。",
    "category": "python"
  },
  {
    "id": 133,
    "set": 2,
    "original_num": 33,
    "question": "你 編 寫 了 以 下 的 程 式 碼 ：  執 行 程 式 輸 出 的 結 果 會 是 什 麼 ？",
    "options": {
      "A": "December-07-18\n1,854,567.5360",
      "B": "12-07-18\n1,854,567.5360",
      "C": "December-07-18\n1,854,567.536",
      "D": "December-07-2018\n1,854,567.5360"
    },
    "answer": "D",
    "option_exps": {
      "D": "December-07-2018 用 了 四 位 年 份 （ 那 是  %Y 不 是  %y ） →  題 庫 標 為 答 案 但 其 實 有",
      "B": "月 份 變 成 數 字  12( 非  %B) 、 (C) 小 數 只 剩 三 位 ( 非  .4f) →  排 除 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： D （ December-07-2018 / 1,854,567.5360 ）\n正 確 結 果 ： A — %y 是 兩 位 數 年 份 (18) ， 輸 出 為  December-07-18 / 1,854,567.5360\n• %B = 完 整 月 份 名 稱 (December) 、 %d = 兩 位 日 期 (07) 、 %y = 兩 位 年 份 (18) ， 第 一 行\n輸 出  December-07-18 。\n• {:,.4f} ： 逗 號 千 分 位  + 四 位 小 數 ， 1854567.536 →  1,854,567.5360 。\n誤 。\n• 解 題 技 巧 ： %y 兩 位 、 %Y 四 位 ； ,.4f 同 時 做 千 分 位 與 四 位 小 數 。",
    "category": "python",
    "question_img": "圖片/python/q133_question.png"
  },
  {
    "id": 134,
    "set": 2,
    "original_num": 34,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "{\"a\", \"c\"}",
      "B": "{\"a\", \"f\", \"g\", \"b\", \"e\", \"c\"}",
      "C": "{\"e\", \"b\"}",
      "D": "{\"a\", \"f\", \"g\", \"c\"}"
    },
    "answer": "C",
    "option_exps": {
      "C": "結 果 為  {\"e\",\"b\"} →  對 應  (C) 。",
      "A": "{\"a\",\"c\"} 是 差 集 ； (D){\"a\",\"f\",\"g\",\"c\"} 是 對 稱 差 。",
      "B": "是 聯 集 （ 6 個 元 素 ） →  不 是 交 集 。"
    },
    "explanation": "• set1={\"a\",\"b\",\"c\",\"e\"} 、 set2={\"b\",\"e\",\"f\",\"g\"} ， & 是 「 交 集 」 。\n• 交 集  = 兩 邊 都 有 的 元 素 ： 只 有  b 、 e 同 時 出 現 在 兩 集 合 。\n• 解 題 技 巧 ： & 取 交 集 ， 記 住 「 都 有 才 留 」 。",
    "category": "python",
    "question_img": "圖片/python/q134_question.png"
  },
  {
    "id": 135,
    "set": 2,
    "original_num": 35,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "1",
      "C": "0",
      "D": "True"
    },
    "answer": "A",
    "option_exps": {
      "A": "'apple' in lst 為  False →  對 應  (A) 。",
      "D": "True ： 忽 略 了  'apple' 已 被 覆 蓋 。",
      "B": "(C) 1/0 ： in 回 傳 布 林 值 ， 不 是 數 字 。"
    },
    "explanation": "• lst[0]='tomato' 把 第 一 個 元 素 由  'apple' 改 成  'tomato' 。\n• 改 動 後  lst=['tomato','banana','cherry'] ， 已 不 含  'apple' 。\n• 解 題 技 巧 ： 先 把 賦 值 後 的 串 列 在 腦 中 更 新 ， 再 判 斷  in 。",
    "category": "python",
    "question_img": "圖片/python/q135_question.png"
  },
  {
    "id": 136,
    "set": 2,
    "original_num": 36,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "{\"e\", \"b\"}",
      "B": "{\"a\", \"f\", \"g\", \"b\", \"e\", \"c\"}",
      "C": "{\"a\", \"c\"}",
      "D": "{\"a\", \"f\", \"g\", \"c\"}"
    },
    "answer": "B",
    "option_exps": {
      "B": "合 併 去 重 後 為  {a,b,c,e,f,g} →  對 應  (B) 。",
      "C": "{\"a\",\"c\"} 是 差 集 ； (A){\"e\",\"b\"} 是 交 集 。",
      "D": "{\"a\",\"f\",\"g\",\"c\"} 是 對 稱 差  →  少 了  b 、 e 。"
    },
    "explanation": "• set1={\"a\",\"b\",\"c\",\"e\"} 、 set2={\"b\",\"e\",\"f\",\"g\"} ， | 是 「 聯 集 」 。\n• 聯 集  = 兩 集 合 所 有 元 素 ， 重 複 者 只 算 一 次 。\n• 解 題 技 巧 ： | 取 聯 集 ， 元 素 最 多 、 且 自 動 去 重 。",
    "category": "python",
    "question_img": "圖片/python/q136_question.png"
  },
  {
    "id": 137,
    "set": 2,
    "original_num": 37,
    "question": "令  num=[[1,2,3],[4,5,6],[7,8,9]] ， 請 問  num[2][1]-num[1][2] 是 哪 一 個 值 ？",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "option_exps": {
      "B": "8 - 6 = 2 →  對 應  (B) 。",
      "A": "1 、 (C) 3 、 (D) 4 ： 索 引 取 錯 位 置 才 會 得 出 。"
    },
    "explanation": "• num[2] 是 第  3 列  [7,8,9] ， num[2][1] 取 其 第  2 個  →  8 。\n• num[1] 是 第  2 列  [4,5,6] ， num[1][2] 取 其 第  3 個  →  6 。\n• 解 題 技 巧 ： 二 維 索 引 先 列 後 行 ， 皆 從  0 起 算 。",
    "category": "python"
  },
  {
    "id": 138,
    "set": 2,
    "original_num": 38,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "['a', 'b', 'c', ['1', '2', '3']]",
      "B": "['a', 'b', 'c', '1', '2', '3']",
      "C": "error",
      "D": "['1', '2', '3']"
    },
    "answer": "A",
    "option_exps": {
      "A": "結 果 為  ['a','b','c',['1','2','3']] →  對 應  (A) 。",
      "B": "是  extend 的 效 果 （ 逐 一 展 開 合 併 ） ， 非  append 。",
      "D": "只 剩  L2 、 (C) error →  與  append 行 為 不 符 。"
    },
    "explanation": "• L1.append(L2) 是 把 整 個  L2 「 當 成 單 一 元 素 」 加 到  L1 末 端 。\n• 因 此  L2 變 成  L1 的 第  4 個 元 素 ， 仍 保 持 巢 狀 串 列 形 式 。\n• 解 題 技 巧 ： append 加 「 一 個 」 元 素 ； 要 展 開 合 併 用  extend 。",
    "category": "python",
    "question_img": "圖片/python/q138_question.png"
  },
  {
    "id": 139,
    "set": 2,
    "original_num": 39,
    "question": "令  num=[[1,2,3],[4,5,6],[7,8,9]] ， 請 問  len(num) 是 哪 一 個 值 ？",
    "options": {
      "A": "3",
      "B": "9",
      "C": "6",
      "D": "TypeError"
    },
    "answer": "A",
    "option_exps": {
      "A": "len(num) 為  3 →  對 應  (A) 。",
      "B": "9 ： 那 是 把 所 有 數 字 總 數 加 起 來  →  誤 解  len 。",
      "C": "6 、 (D) TypeError ： len 對 串 列 完 全 合 法 ， 回 傳  3 。"
    },
    "explanation": "• num 是 含  3 個 子 串 列 的 串 列 ， len 計 算 的 是 「 外 層 元 素 個 數 」 。\n• 外 層 有  [1,2,3] 、 [4,5,6] 、 [7,8,9] 共  3 個 元 素 。\n• 解 題 技 巧 ： len 只 數 最 外 層 ， 不 會 遞 迴 進 子 串 列 。",
    "category": "python"
  },
  {
    "id": 140,
    "set": 2,
    "original_num": 40,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "3",
      "B": "1",
      "C": "4",
      "D": "2"
    },
    "answer": "C",
    "option_exps": {
      "C": "len(lst) 為  4 →  對 應  (C) 。",
      "A": "3 ： 忘 了 已  append 一 筆 。",
      "B": "1 、 (D) 2 ： 與 實 際 元 素 數 不 符 。"
    },
    "explanation": "• lst.append('tomato') 在 串 列 末 端 加 入 一 個 元 素 。\n• 原 本  3 個 元 素 ， 加 入  'tomato' 後 變 成  4 個 。\n• 解 題 技 巧 ： append 每 次 只 增 加 一 個 元 素 ， 長 度  +1 。",
    "category": "python",
    "question_img": "圖片/python/q140_question.png"
  },
  {
    "id": 141,
    "set": 2,
    "original_num": 41,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "True",
      "C": "0",
      "D": "1"
    },
    "answer": "A",
    "option_exps": {
      "A": "'apple' in ['banana'] 判 斷  apple 是 否 在 此 子 清 單 ， 並 不 存 在  →  False ， 對 應  (A) 。",
      "B": "True 要 求  apple 出 現 在  lst[1:2] ， 但 切 片 裡 只 有  banana 。",
      "C": "(D) 0 、 1 是 數 值 ， in 運 算 回 傳 的 是 布 林 值  True/False ， 型 別 不 符 。"
    },
    "explanation": "• 切 片  lst[1:2] 取 索 引  1 （ 含 ） 到  2 （ 不 含 ） ， 結 果 只 有 一 個 元 素  ['banana'] 。\n• 解 題 技 巧 ： 先 算 出 切 片 內 容 ， 再 判 斷  in ， 切 片 不 含 終 點 索 引  2 。",
    "category": "python",
    "question_img": "圖片/python/q141_question.png"
  },
  {
    "id": 142,
    "set": 2,
    "original_num": 42,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "' '",
      "B": "apple",
      "C": "banana",
      "D": "cherry"
    },
    "answer": "D",
    "option_exps": {
      "D": "lst[-1] 取 最 後 一 個 元 素  →  'cherry' ， 對 應  (D) 。",
      "B": "banana 是 刪 除 後 的 第 一 個 元 素  lst[0] ， 不 是 最 後 一 個 。",
      "A": "' ' 為 空 字 串 、 (C) apple 已 被  del 移 除 ， 都 不 會 印 出 。"
    },
    "explanation": "• del lst[0] 刪 掉 索 引  0 的  'apple' ， 清 單 變 成  ['banana','cherry'] 。\n• 解 題 技 巧 ： del 後 重 新 數 一 次 清 單 ， -1 永 遠 指 向 當 下 的 最 後 一 個 。",
    "category": "python",
    "question_img": "圖片/python/q142_question.png"
  },
  {
    "id": 143,
    "set": 2,
    "original_num": 43,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "cherry",
      "B": "banana",
      "C": "' '",
      "D": "apple"
    },
    "answer": "D",
    "option_exps": {
      "D": "lst[0] 取 第 一 個 元 素  →  'apple' ， 對 應  (D) 。",
      "A": "cherry 已 被  pop() 移 除 。",
      "B": "banana 是  lst[1] ， 不 是  lst[0] 。",
      "C": "' ' 空 字 串 並 非 清 單 內 容 。"
    },
    "explanation": "• lst.pop() 不 帶 參 數 會 移 除 並 回 傳 最 後 一 個 元 素  'cherry' ， 清 單 剩  ['apple','banana'] 。\n• 解 題 技 巧 ： pop() 動 的 是 尾 端 ， 前 面 索 引 不 受 影 響 ， lst[0] 仍 是  apple 。",
    "category": "python",
    "question_img": "圖片/python/q143_question.png"
  },
  {
    "id": 144,
    "set": 2,
    "original_num": 44,
    "question": "你 為 你 的 公 司 開 發 了  Python 應 用 程 式 ， 一 個 名 為  books 的 清 單 包 含  1000 種 書 籍 ， 你 需 要 分 割 這 個 清 單 ， 顯 示 由 第 二 本 書\n開 始 到 最 後 ， 中 間 間 隔  1 本 書 籍 ， 你 應 該 使 用 哪 個 程 式 碼 ？",
    "options": {
      "A": "books [1::2]",
      "B": "books [::2]",
      "C": "books [2:2]",
      "D": "books [1:2]"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) books[1::2] ： 從 索 引  1 開 始 、 每 隔  1 本 取 一 本 、 直 到 結 尾 ， 完 全 符 合 需 求 。",
      "B": "books[::2] 從 索 引  0 （ 第 一 本 ） 開 始 ， 不 是 第 二 本 。",
      "C": "books[2:2] 起 訖 相 同 回 傳 空 清 單 ； (D) books[1:2] 只 取 到 一 本 。"
    },
    "explanation": "• 切 片 語 法  [start:stop:step] ： 起 點 索 引 、 終 點 （ 不 含 ） 、 間 隔 。\n• 第 二 本 書 索 引 為  1 ， 要 到 最 後 且 間 隔  1 本 即  step=2 ， 省 略  stop 代 表 到 底 。",
    "category": "python"
  },
  {
    "id": 145,
    "set": 2,
    "original_num": 45,
    "question": "令  num=[[1,2,3],[4,5,6],[7,8,9]] ， 請 問 下 列 哪 一 個 索 引 可 以 正 確 取 用 值  8 ？",
    "options": {
      "A": "num[0][7]",
      "B": "num[3][2]",
      "C": "num[2][1]",
      "D": "num[1][8]"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) num[2][1] 取  [7,8,9] 的 索 引  1 →  8 。",
      "A": "num[0][7] ： [1,2,3] 沒 有 索 引  7 ， 會  IndexError 。",
      "B": "num[3] 超 出 範 圍 ； (D) num[1][8] 索 引  8 超 出 子 清 單 長 度 。"
    },
    "explanation": "• 二 維 清 單 先 用 第 一 個 索 引 選 子 清 單 、 再 用 第 二 個 索 引 選 元 素 。\n• 值  8 在 第 三 個 子 清 單  [7,8,9] （ 索 引  2 ） 的 第 二 個 位 置 （ 索 引  1 ） 。",
    "category": "python"
  },
  {
    "id": 146,
    "set": 2,
    "original_num": 46,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "[ ]",
      "B": "['apple', 'banana', 'cherry']",
      "C": "'apple', 'banana', 'cherry'",
      "D": ":"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) print 印 出 完 整 清 單  ['apple', 'banana', 'cherry'] 。",
      "A": "[ ] 空 清 單 是 切 片 到 空 範 圍 才 會 出 現 ， 例 如  lst[2:1] 。",
      "C": "少 了 中 括 號 ， 那 是  tuple 的 印 法 ， list 印 出 會 帶  [ ] 。",
      "D": "':' 只 是 符 號 ， 不 是 程 式 輸 出 。"
    },
    "explanation": "• 切 片  lst[:] 省 略 起 訖 ， 等 於 複 製 整 個 清 單 。",
    "category": "python",
    "question_img": "圖片/python/q146_question.png"
  },
  {
    "id": 147,
    "set": 2,
    "original_num": 47,
    "question": "關 於 容 器 資 料 型 別 的 陳 述 ， 下 列 何 者 不 正 確 ？",
    "options": {
      "A": "set 資 料 放 置 於 中 括 號 [ ] 內",
      "B": "set( 集 合 ) 資 料 具 有 無 序 與 互 異 的 特 性",
      "C": "dict （ 字 典 ） 是 「 鍵 （ Key ）」 與 「 值 （ Value ）」 對 應 的 物 件 ， 是 可 變 物 件",
      "D": "tuple 是 不 可 變 物 件"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 不 正 確 ： set 用 大 括 號  { } 建 立 ， 中 括 號  [ ] 是  list 的 語 法 。",
      "C": "dict 以  key:value 配 對 、 且 可 變 （ 可 新 增 修 改 ） ， 描 述 正 確 。",
      "D": "tuple 是 不 可 變 物 件 ， 建 立 後 不 能 改 ， 描 述 正 確 。"
    },
    "explanation": "• set 的 特 性 是 無 序 （ 無 索 引 ） 且 元 素 互 異 （ 自 動 去 重 ） ， (B) 正 確 。\n• 解 題 技 巧 ： 四 種 容 器 中 只 有  list 用  [ ] ， set/dict 用  { } 。",
    "category": "python"
  },
  {
    "id": 148,
    "set": 2,
    "original_num": 48,
    "question": "關 於  dict 字 典 資 料 型 態 的 陳 述 ， 下 列 何 者 不 正 確 ？",
    "options": {
      "A": "資 料 放 置 於 大 括 號 {} 內",
      "B": "適 用 於 序 列 型 別 的 「 切 片 」 運 算 ， 在 字 典 中 就 無 法 使 用",
      "C": "每 一 筆 資 料 是 一 對 key:value",
      "D": "dict 字 典 中 的 value 必 須 是 不 可 變 的 資 料 型 態"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 不 正 確 ： dict 的  value 沒 有 限 制 ， 可 是 任 何 型 別 （ 含 可 變 的  list 、 dict ） 。",
      "A": "字 典 資 料 放 在 大 括 號  { } 內 ， 描 述 正 確 。",
      "B": "字 典 無 序 、 不 支 援 切 片 運 算 ， 描 述 正 確 。",
      "C": "每 筆 資 料 是 一 對  key:value ， 描 述 正 確 。"
    },
    "explanation": "• 解 題 技 巧 ： 真 正 有 限 制 的 是  key 必 須 可 雜 湊 （ 不 可 變 ） ， value 沒 有 限 制 。",
    "category": "python"
  },
  {
    "id": 149,
    "set": 2,
    "original_num": 49,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "TypeError",
      "B": "台 北",
      "C": "Mary",
      "D": "20"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) data['addr'] 對 應 的 值 是  ' 台 北 ' ， 正 確 印 出 。",
      "C": "Mary 是  'name' 的 值 、 (D) 20 是  'age' 的 值 ， 都 不 是  addr 。",
      "A": "TypeError ： 以 合 法  key 取 值 不 會 出 錯 ， 這 是 正 常 操 作 。"
    },
    "explanation": "• 字 典 用 中 括 號 加  key 取 值 ： data['addr'] 取 出  key 為  'addr' 的 對 應 值 。\n• 解 題 技 巧 ： dict[key] 取 的 是 該  key 的  value ， 不 是  key 本 身 。",
    "category": "python",
    "question_img": "圖片/python/q149_question.png"
  },
  {
    "id": 150,
    "set": 2,
    "original_num": 50,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "{\"a\", \"f\", \"g\", \"b\", \"e\", \"c\"}",
      "B": "{\"a\", \"c\"}",
      "C": "{\"a\", \"f\", \"g\", \"c\"}",
      "D": "{\"e\", \"b\"}"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) {\"a\", \"c\"} 即 為 差 集 結 果 。",
      "A": "列 出 兩 集 合 全 部 元 素 ， 那 是 聯 集  set1|set2 。",
      "C": "含  f 、 g 屬 於  set2 ； (D) {e,b} 是 交 集  set1&set2 ， 方 向 也 相 反 。"
    },
    "explanation": "• 集 合 相 減  set1-set2 取 「 在  set1 、 但 不 在  set2 」 的 元 素 （ 差 集 ） 。\n• set1={a,b,c,e} ， set2={b,e,f,g} ： b 、 e 共 有 要 扣 掉 ， 剩 下  a 、 c 。",
    "category": "python",
    "question_img": "圖片/python/q150_question.png"
  },
  {
    "id": 151,
    "set": 2,
    "original_num": 51,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "apple",
      "B": "cherry",
      "C": "banana",
      "D": "tomato"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) lst[0] 取 第 一 個 元 素  →  'banana' 。",
      "A": "apple 已 被  remove 移 除 。",
      "B": "cherry 是 索 引  1 、 (D) tomato 是 最 後 一 個 ， 都 不 是  lst[0] 。"
    },
    "explanation": "• append('tomato') 加 到 尾 端  →  ['apple','banana','cherry','tomato'] 。\n• remove('apple') 移 除 第 一 個  apple →  ['banana','cherry','tomato'] 。",
    "category": "python",
    "question_img": "圖片/python/q151_question.png"
  },
  {
    "id": 152,
    "set": 2,
    "original_num": 52,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "NameError",
      "B": "True",
      "C": "False",
      "D": "TypeError"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) ' 台 北 ' in data 找 不 到 對 應 的  key →  False 。",
      "B": "True 要 求  ' 台 北 ' 是  data 的 某 個  key 。",
      "A": "NameError 、 (D) TypeError 都 不 會 發 生 ， in 對  dict 是 合 法 運 算 。"
    },
    "explanation": "• 對  dict 使 用  in ， 檢 查 的 是 「 鍵 （ key ）」 是 否 存 在 ， 不 是 值 （ value ） 。\n• data 的  key 只 有  name 、 age 、 addr ； ' 台 北 ' 是  addr 的  value ， 不 是  key 。\n• 解 題 技 巧 ： x in dict 等 同  x in dict.keys() ， 要 查 值 需 用  in data.values() 。",
    "category": "python",
    "question_img": "圖片/python/q152_question.png"
  },
  {
    "id": 153,
    "set": 2,
    "original_num": 53,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "'apple', 'banana'",
      "B": "['apple', 'banana']",
      "C": "'apple', 'banana', 'cherry'",
      "D": "['apple', 'banana', 'cherry']"
    },
    "answer": "B",
    "option_exps": {
      "B": "切 片 仍 是  list ， 內 容 為  ['apple', 'banana'] →  對 應  (B) 。",
      "A": "(C) 沒 有 中 括 號  →  切 片 回 傳 的 是  list ， 不 是 逗 號 裸 值 。",
      "D": "多 了  'cherry' ： 索 引  2 不 在 切 片 範 圍 內 。"
    },
    "explanation": "• lst[0:2] 是 切 片 ， 取 索 引  0 到  1 （ 不 含  2 ） 兩 個 元 素 。\n• 解 題 技 巧 ： 切 片  [a:b] 不 含  b ， 且 結 果 型 別 與 原 序 列 相 同 。",
    "category": "python",
    "question_img": "圖片/python/q153_question.png"
  },
  {
    "id": 154,
    "set": 2,
    "original_num": 54,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "Mary",
      "B": "TypeError",
      "C": "高 雄",
      "D": "台 北"
    },
    "answer": "C",
    "option_exps": {
      "C": "\"addr\":\" 台 北 \" 被  \"addr\":\" 高 雄 \" 蓋 掉 ， data['addr'] 為 「 高 雄 」 →  (C) 。",
      "D": "台 北 ： 已 被 後 面 的 同 名  key 覆 蓋 掉 。",
      "A": "Mary 是  name 的 值 ， 不 是  addr 。",
      "B": "重 複  key 不 會 報 錯 ， 只 是 後 者 勝 出 。"
    },
    "explanation": "• 字 典  key 不 可 重 複 ， 後 出 現 的  \"addr\" 會 覆 蓋 前 面 的 值 。",
    "category": "python",
    "question_img": "圖片/python/q154_question.png"
  },
  {
    "id": 155,
    "set": 2,
    "original_num": 55,
    "question": "令  data={\"name\", \"Mary\", \"age\", \"20\", \"addr\", \" 台 北 \", \"addr\", \" 高 雄 \"} ， 請 問  len(data) 是 哪 一 個 值 ？",
    "options": {
      "A": "8",
      "B": "TypeError",
      "C": "7",
      "D": "9"
    },
    "answer": "C",
    "option_exps": {
      "C": "去 重 後 剩  name 、 Mary 、 age 、 20 、 addr 、 台 北 、 高 雄  共  7 個  →  (C) 。",
      "A": "8 ： 沒 考 慮  set 會 把 重 複 的  \"addr\" 合 併 。",
      "B": "TypeError ： 字 串 可 作  set 元 素 ， 不 會 出 錯 。"
    },
    "explanation": "• 用  {} 且 元 素 以 逗 號 並 列 （ 非  key:value ） →  這 是  set ， 不 是  dict 。\n• 共 列 出  8 個 元 素 ， 但  \"addr\" 出 現 兩 次 ， set 會 自 動 去 重 。",
    "category": "python"
  },
  {
    "id": 156,
    "set": 2,
    "original_num": 56,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "['apple','banana','cherry']",
      "B": "error",
      "C": "lst",
      "D": "'apple','banana','cherry'"
    },
    "answer": "A",
    "option_exps": {
      "A": "輸 出  ['apple','banana','cherry'] ， 含 中 括 號  →  對 應  (A) 。",
      "D": "少 了 中 括 號 ： 那 是 逗 號 裸 值 ， 不 是  list 的 印 法 。",
      "B": "error ： 印  list 不 會 出 錯 。",
      "C": "lst ： 印 的 是 變 數 內 容 ， 不 是 變 數 名 稱 字 面 。"
    },
    "explanation": "• print(lst) 直 接 印 整 個  list ， 會 連 同 中 括 號 與 引 號 一 起 顯 示 。",
    "category": "python",
    "question_img": "圖片/python/q156_question.png"
  },
  {
    "id": 157,
    "set": 2,
    "original_num": 57,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "[ ]",
      "B": "[' ']",
      "C": "'apple'",
      "D": "'banana'"
    },
    "answer": "A",
    "option_exps": {
      "A": "清 空 後  lst 變 成 空  list ， 印 出  [] →  對 應  (A) 。",
      "B": "[' '] ： 清 空 不 會 留 下 空 字 串 元 素 。",
      "C": "(D) 仍 有 元 素  →  與  clear() 已 清 空 矛 盾 。"
    },
    "explanation": "• clear() 會 清 空  list 的 所 有 元 素 ， 但  list 物 件 仍 存 在 。\n• 解 題 技 巧 ： clear() 後  list 變 空  [] ， 但 不 是  None 。",
    "category": "python",
    "question_img": "圖片/python/q157_question.png"
  },
  {
    "id": 158,
    "set": 2,
    "original_num": 58,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "option_exps": {
      "C": "最 終 為  ['banana','cherry','tomato'] ， len() 為  3 →  對 應  (C) 。",
      "D": "4 ： 忽 略 了  remove 會 少 掉 一 個 元 素 。",
      "B": "2 ： append 已 先 補 回 一 個 ， 淨 變 化 是  +1-1=0 。"
    },
    "explanation": "• 起 始  ['apple','banana','cherry'] 共  3 個 元 素 。\n• append('tomato') 加  1 個  →  4 個 ； remove('apple') 移 除  1 個  →  3 個 。",
    "category": "python",
    "question_img": "圖片/python/q158_question.png"
  },
  {
    "id": 159,
    "set": 2,
    "original_num": 59,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "False",
      "C": "True",
      "D": "1"
    },
    "answer": "C",
    "option_exps": {
      "C": "'apple' 確 實 在  lst 中 ， print 輸 出  True →  對 應  (C) 。",
      "B": "False ： apple 明 明 存 在 ， 不 會 是  False 。",
      "A": "(D) 0 、 1 ： in 回 傳 的 是 布 林 值 ， 不 是 數 字 。"
    },
    "explanation": "• in 運 算 子 檢 查 元 素 是 否 存 在 於  list ， 回 傳  True 或  False 。\n• 解 題 技 巧 ： 成 員 測 試  in 一 律 得 到  True/False 。",
    "category": "python",
    "question_img": "圖片/python/q159_question.png"
  },
  {
    "id": 160,
    "set": 2,
    "original_num": 60,
    "question": "令  num=[[1,2,3],[4,5,6],[7,8,9]] ， 請 問  num[0][1]+num[1][2] 是 哪 一 個 值 ？",
    "options": {
      "A": "6",
      "B": "12",
      "C": "8",
      "D": "14"
    },
    "answer": "C",
    "option_exps": {
      "C": "2 + 6 = 8 →  對 應  (C) 。",
      "A": "6 ： 只 算 了 其 中 一 項 。",
      "B": "(D) 12 、 14 ： 索 引 取 錯 位 置 才 會 算 出 。"
    },
    "explanation": "• 二 維  list 用  [ 列 ][ 行 ] 取 值 ， 索 引 皆 從  0 起 算 。\n• num[0][1] 取 第  0 列 第  1 個  = 2 ； num[1][2] 取 第  1 列 第  2 個  = 6 。",
    "category": "python"
  },
  {
    "id": 161,
    "set": 2,
    "original_num": 61,
    "question": "假 設  data = {\"name\":\"Mary\", \"age\":\"20\", \"addr\":\" 台 北 \"} ，  請 問  print(data['name']) 會 印 出 什 麼 ？",
    "options": {
      "A": "台 北",
      "B": "TypeError",
      "C": "Mary",
      "D": "20"
    },
    "answer": "C",
    "option_exps": {
      "C": "\"name\" 的 值 是  \"Mary\" ， 印 出  Mary →  對 應  (C) 。",
      "A": "台 北 ： 那 是  addr 的 值 ， 不 是  name 。",
      "D": "20 ： 那 是  age 的 值 。",
      "B": "TypeError ： key 存 在 ， 正 常 取 值 不 會 出 錯 。"
    },
    "explanation": "• 字 典 用  key 取 值 ， data['name'] 取 得  \"name\" 對 應 的 值 。",
    "category": "python"
  },
  {
    "id": 162,
    "set": 2,
    "original_num": 62,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "['tomato']",
      "B": "['apple']",
      "C": "['banana', 'tomato']",
      "D": "['tomato', 'banana']"
    },
    "answer": "D",
    "option_exps": {
      "D": "切 片 結 果 為  ['tomato', 'banana'] →  對 應  (D) 。",
      "C": "['banana','tomato'] ： 順 序 顛 倒 ， 切 片 會 保 留 原 順 序 。",
      "A": "(B) 只 剩 一 個 元 素 ： lst[:2] 會 取 到 兩 個 。"
    },
    "explanation": "• lst[0]='tomato' 先 把 第  0 個 元 素 改 成  'tomato' 。\n• list 變 為  ['tomato','banana','cherry'] ； lst[:2] 取 前 兩 個 。",
    "category": "python",
    "question_img": "圖片/python/q162_question.png"
  },
  {
    "id": 163,
    "set": 2,
    "original_num": 63,
    "question": "假 設  lst=['a', 'b', 'c'] ，  請 問  print(lst[1]) 會 印 出 什 麼 ？",
    "options": {
      "A": "b",
      "B": "'a'",
      "C": "a",
      "D": "'b'"
    },
    "answer": "A",
    "option_exps": {
      "A": "print 印 字 串 時 不 會 加 引 號 ， 直 接 顯 示  b →  對 應  (A) 。",
      "D": "'b' ： print 不 會 把 引 號 一 起 印 出 來 。",
      "C": "a ： 那 是 索 引  0 的 元 素 ， 不 是 索 引  1 。"
    },
    "explanation": "• lst[1] 取 索 引  1 的 元 素 ， 也 就 是  'b' 。\n• 解 題 技 巧 ： print 字 串 不 帶 引 號 ； 引 號 只 出 現 在 容 器 （ 如  list ） 的 印 法 裡 。",
    "category": "python"
  },
  {
    "id": 164,
    "set": 2,
    "original_num": 64,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "顯 示 執 行 錯 誤",
      "B": "[7, 6, 5, 4, 3, 2, 1]",
      "C": "[1, 2, 3, 4, 5, 6, 7]",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "對 應  (B) 。",
      "C": "由 小 到 大 ： 那 是 預 設  reverse=False 的 結 果 。",
      "A": "執 行 錯 誤 ： sorted 對 數 字  list 正 常 運 作 ， 不 會 報 錯 。"
    },
    "explanation": "• sorted() 回 傳 排 序 後 的 新  list ， reverse=True 代 表 由 大 到 小 。\n• 原  [5,3,7,1,6,2,4] 由 大 到 小 排 為  [7,6,5,4,3,2,1] 。",
    "category": "python",
    "question_img": "圖片/python/q164_question.png"
  },
  {
    "id": 165,
    "set": 2,
    "original_num": 65,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "3",
      "C": "2",
      "D": "1"
    },
    "answer": "B",
    "option_exps": {
      "B": "串 列 仍 有  3 個 元 素 ， len(lst) 印 出  3 →  對 應  (B) 。",
      "A": "(C)(D) 0 、 2 、 1 都 誤 以 為  len 會 因 賦 值 而 改 變  →  排 除 。"
    },
    "explanation": "• lst[0]='tomato' 只 是 把 第  0 個 元 素 「 換 掉 」 ， 不 會 新 增 或 刪 除 元 素 。\n• 解 題 技 巧 ： lst[i]= 值  是 「 指 派 覆 寫 」 ， 長 度 不 變 。",
    "category": "python",
    "question_img": "圖片/python/q165_question.png"
  },
  {
    "id": 166,
    "set": 2,
    "original_num": 66,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "cherry",
      "B": "'banana'",
      "C": "''",
      "D": "'apple'"
    },
    "answer": "A",
    "option_exps": {
      "A": "print 印 字 串 時 不 會 加 引 號 ， 畫 面 顯 示  cherry →  對 應  (A) 。",
      "B": "'banana' 是  lst[-2] ， 且 帶 引 號  →  不 對 。",
      "C": "'' 空 字 串 、 (D) 'apple' 是 第 一 個 元 素  →  皆 排 除 。"
    },
    "explanation": "• 負 索 引 從 尾 端 算 起 ： lst[-1] 取 得 最 後 一 個 元 素  'cherry' 。\n• 解 題 技 巧 ： lst[-1]= 最 後 一 項 ； print 出 來 的 字 串 沒 有 引 號 。",
    "category": "python",
    "question_img": "圖片/python/q166_question.png"
  },
  {
    "id": 167,
    "set": 2,
    "original_num": 67,
    "question": "假 設  s=(5, 7, 4, 9, 3) ， 請 問 下 列 哪 個 指 令 不 能 算 出 平 均 值 ？",
    "options": {
      "A": "(s(0)+s(1)+s(2)+s(3)+s(4))/5",
      "B": "sum(s)/len(s)",
      "C": "sum(s)/5",
      "D": "(s[0]+s[1]+s[2]+s[3]+s[4])/5"
    },
    "answer": "A",
    "option_exps": {
      "A": "故  (A) 是 「 不 能 」 算 出 平 均 值 的 指 令  →  正 解 。",
      "B": "sum(s)/len(s) 、 (C) sum(s)/5 、 (D) s[0]+...+s[4])/5 都 能 正 確 得 到 平 均 。"
    },
    "explanation": "• tuple 也 是 用 「 中 括 號 」 加 索 引 取 值 ， 例 如  s[0] 、 s[1] 。\n均 。\n• 解 題 技 巧 ： 取 元 素 一 律 用 中 括 號  [ ] ， 看 到  s(0) 圓 括 號 就 是 錯 的 。",
    "category": "python"
  },
  {
    "id": 168,
    "set": 2,
    "original_num": 68,
    "question": "假 設  lst=[1, 4, 2, 5] ，  請 問  print(lst.reverse()) 會 印 出 什 麼 ？",
    "options": {
      "A": "[5, 2, 4, 1]",
      "B": "[1, 2, 4, 5]",
      "C": "5, 4, 2, 1",
      "D": "1, 2, 4, 5"
    },
    "answer": "A",
    "option_exps": {
      "A": "[5, 2, 4, 1] 只 是  lst 被 反 轉 後 的 內 容 ， 並 非  print 實 際 印 出 的 值  →  題 庫 標 為 答 案 但 其",
      "B": "(D) 1,2,4,5 是 排 序 結 果 、 (C) 格 式 也 不 符  →  排 除 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： A （ [5, 2, 4, 1] ）\n正 確 結 果 ： None — list.reverse() 原 地 反 轉 並 回 傳  None ， print 印 出 的 是  None （ 不 在 任\n何 選 項 中 ）\n• list.reverse() 是 「 就 地 反 轉 」 ： 它 會 改 動 原 串 列 ， 但 回 傳 值 是  None 。\n項 中 。\n實 有 誤 。\n• 解 題 技 巧 ： reverse() ／ sort() 一 律 回 傳  None ， 要 看 結 果 得 先 反 轉 再 單 獨  print(lst) 。",
    "category": "python"
  },
  {
    "id": 169,
    "set": 2,
    "original_num": 69,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "3",
      "B": "2",
      "C": "1",
      "D": "4"
    },
    "answer": "B",
    "option_exps": {
      "B": "移 除 後 剩  ['apple','banana'] 共  2 個 ， len 印 出  2 →  對 應  (B) 。",
      "A": "3 是 原 本 長 度 ， 沒 算 到  pop →  排 除 。",
      "C": "1 、 (D) 4 都 與 實 際 剩 餘 數 量 不 符  →  排 除 。"
    },
    "explanation": "• lst.pop() 不 給 索 引 時 ， 預 設 移 除 「 最 後 一 個 」 元 素  'cherry' 。\n• 解 題 技 巧 ： pop() 預 設 刪 尾 端 ， 每 執 行 一 次 長 度 減  1 。",
    "category": "python",
    "question_img": "圖片/python/q169_question.png"
  },
  {
    "id": 170,
    "set": 2,
    "original_num": 70,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "TypeError",
      "B": "Mary",
      "C": "台 北",
      "D": "20"
    },
    "answer": "C",
    "option_exps": {
      "C": "print(addr) 即 印 出  ' 台 北 ' →  對 應  (C) 。",
      "A": "元 素 數 量 剛 好 相 符 ， 不 會  TypeError →  排 除 。",
      "B": "Mary 是  name 、 (D) 20 是  age →  都 不 是  addr 。"
    },
    "explanation": "• tuple 解 包 ： name, age, addr=data 會 依 序 對 應  data 的 三 個 元 素 。\n• name='Mary' 、 age='20' 、 addr=' 台 北 ' 。",
    "category": "python",
    "question_img": "圖片/python/q170_question.png"
  },
  {
    "id": 171,
    "set": 3,
    "original_num": 1,
    "question": "關 於 函 數 的 說 明 下 列 何 者 有 誤 ？",
    "options": {
      "A": "要 使 用 函 數 的 唯 一 管 道 就 是 自 訂 函 數",
      "B": "可 以 省 去 重 複 撰 寫 相 同 程 式 碼",
      "C": "有 助 於 日 後 程 式 的 除 錯 和 維 護",
      "D": "可 以 大 幅 縮 短 開 發 的 時 間"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 說 「 唯 一 管 道 就 是 自 訂 函 數 」 說 法 錯 誤  →  正 是 「 有 誤 」 的 選 項 。",
      "B": "函 數 可 避 免 重 複 撰 寫 相 同 程 式 碼  →  正 確 。",
      "C": "有 助 於 除 錯 維 護 、 (D) 縮 短 開 發 時 間  →  皆 為 函 數 的 真 正 優 點 。"
    },
    "explanation": "• Python 除 了 自 訂 函 數 ， 還 能 直 接 用 內 建 函 數 （ 如  print 、 len ） 與 匯 入 模 組 的 函\n數 。\n• 解 題 技 巧 ： 看 到 「 唯 一 」「 一 定 」 這 類 絕 對 字 眼 ， 多 半 是 錯 的 敘 述 。",
    "category": "python"
  },
  {
    "id": 172,
    "set": 3,
    "original_num": 2,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "False",
      "C": "1",
      "D": "True"
    },
    "answer": "D",
    "option_exps": {
      "D": "條 件 成 立 ， 執 行  if 區 塊  print('True') ， 畫 面 印 出  True →  對 應  (D) 。",
      "B": "False 是  else 區 塊 ， 但 條 件 為 真 不 會 跑 到  →  排 除 。",
      "A": "0 、 (C) 1 根 本 不 是 程 式 會 印 的 內 容  →  排 除 。"
    },
    "explanation": "• 兩 邊 都 是 字 串 ， '5' > '2' 會 逐 字 元 比  Unicode 碼 ， '5'(53) 大 於  '2'(50) 。\n• 解 題 技 巧 ： 字 串 比 大 小 是 按 字 元 碼 ， 不 是 數 值 大 小 。",
    "category": "python",
    "question_img": "圖片/python/q172_question.png"
  },
  {
    "id": 173,
    "set": 3,
    "original_num": 3,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  fib(5) 的 結 果 為 何 ？",
    "options": {
      "A": "8",
      "B": "3",
      "C": "5",
      "D": "13"
    },
    "answer": "C",
    "option_exps": {
      "C": "fib(5)=5 →  對 應  (C) 。",
      "A": "8 是  fib(6) 、 (D) 13 是  fib(7) →  多 算 一 兩 步 。",
      "B": "3 是  fib(4) →  少 算 一 步 。"
    },
    "explanation": "• fib ： n=0 回  0 ， n=1 或  n=2 回  1 ， 其 餘 回  fib(n-1)+fib(n-2) 。\n• 逐 步 推 算 ： fib(3)=1+1=2 ， fib(4)=2+1=3 ， fib(5)=3+2=5 。",
    "category": "python",
    "question_img": "圖片/python/q173_question.png"
  },
  {
    "id": 174,
    "set": 3,
    "original_num": 4,
    "question": "下 列 程 式 碼 是 用 來 判 斷 所 輸 入 的 數 字 是 偶 數 或 奇 數 ， 第  2 行 空 白 處 內 容 應 為 何 ？",
    "options": {
      "A": "num % 2 == 1",
      "B": "num // 2 == 0",
      "C": "num % 2 == 0",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) num % 2 == 0 為 真 時 印 「 是 偶 數 」 ， 否 則 印 「 是 奇 數 」 →  正 確 。",
      "A": "num % 2 == 1 判 斷 的 是 奇 數 ， 偶 數 奇 數 標 籤 會 顛 倒  →  排 除 。",
      "B": "num // 2 是 整 除 取 商 ， 不 能 用 來 判 斷 奇 偶  →  排 除 。"
    },
    "explanation": "• 偶 數 的 判 斷 ： 一 個 數 除 以  2 餘 數 為  0 就 是 偶 數 。\n• 解 題 技 巧 ： 判 斷 奇 偶 用  % 取 餘 ， 偶 數 看  % 2 == 0 。",
    "category": "python",
    "question_img": "圖片/python/q174_question.png"
  },
  {
    "id": 175,
    "set": 3,
    "original_num": 5,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "53",
      "B": "5\n3",
      "C": "531",
      "D": "5\n3\n1"
    },
    "answer": "D",
    "option_exps": {
      "D": "5 / 3 / 1 多 了 一 個  1 （ 誤 以 為 含 終 點  1 ） →  題 庫 標 為 答 案 但 其 實 有 誤 。",
      "A": "53 、 (C) 531 把 數 字 擠 在 同 一 行 ， 與  print 每 次 換 行 不 符  →  排 除 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： D （ 5 / 3 / 1 三 行 ）\n正 確 結 果 ： B （ 5 / 3 兩 行 ） — range(5,1,-2) 只 產 生  5 、 3 ， 不 含 終 點  1\n• range(5, 1, -2) ： 從  5 開 始 、 每 次  -2 、 不 含 終 點  1 →  只 產 生  5 、 3 。\n• 迴 圈  print(a) 每 圈 換 行 ， 實 際 輸 出 為 兩 行  5 、 3 。\n• 解 題 技 巧 ： range 的  stop 不 包 含 ； print(a) 每 個 值 各 佔 一 行 。",
    "category": "python",
    "question_img": "圖片/python/q175_question.png"
  },
  {
    "id": 176,
    "set": 3,
    "original_num": 6,
    "question": "Python 程 式 裡 的 區 塊 ， 可 以 透 過 哪 一 種 方 式 來 區 分 出 程 式 碼 層 級 ， 讓 程 式 更 具 有 可 讀 性 ？",
    "options": {
      "A": "跳 行",
      "B": "註 解",
      "C": "留 白",
      "D": "縮 排"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 縮 排 是  Python 區 分 程 式 碼 層 級 、 決 定 哪 幾 行 屬 同 一 區 塊 的 方 式  →",
      "A": "跳 行 、 (B) 註 解 、 (C) 留 白 都 不 能 決 定 程 式 的 層 級 結 構  →  排 除 。"
    },
    "explanation": "• Python 不 用 大 括 號 ， 而 是 靠 「 縮 排 」 來 界 定 程 式 區 塊 與 層 級 。\n正 確 。\n• 解 題 技 巧 ： Python 的 縮 排 具 語 法 意 義 ， 亂 縮 排 會  IndentationError 。",
    "category": "python"
  },
  {
    "id": 177,
    "set": 3,
    "original_num": 7,
    "question": "關 於 模 組 與 套 件 的 說 明 ， 下 列 何 者 有 誤 ？",
    "options": {
      "A": "擁 有 「 __init__.py 」 檔 案 的 目 錄 就 會 被 視 為 一 個 套 件",
      "B": "如 果 要 一 次 匯 入 多 個 套 件 ， 則 必 須 以 分 號 （ ; ） 隔 開 不 同 的 套 件 名 稱",
      "C": "模 組 是 一 個 「 *.py 」 檔 案",
      "D": "多 個 模 組 組 合 在 一 起 還 能 產 生 套 件"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) 一 個  import 只 能 匯 入 一 個 模 組 ， 分 號 不 能 用 來 一 次 匯 入 多 個 套 件 ， 故 敘 述 有 誤 。",
      "A": "含  __init__.py 的 目 錄 確 實 會 被 當 成 套 件  →  正 確 。",
      "C": "模 組 就 是 一 個  *.py 檔  →  正 確 。",
      "D": "多 個 模 組 可 組 成 套 件  →  正 確 。"
    },
    "explanation": "• 要 匯 入 多 個 模 組 通 常 分 行 寫 ， 或 用 「 import a, b 」 以 逗 號 分 隔 ， 而 非 分 號 。\n• 解 題 技 巧 ： 題 目 問 「 有 誤 」 ， 找 出 與  Python 語 法 不 符 的 那 一 項 即 可 。",
    "category": "python"
  },
  {
    "id": 178,
    "set": 3,
    "original_num": 8,
    "question": "有 關 指 派 運 算 子 的 描 述 ， 何 者 有 誤 ？",
    "options": {
      "A": "在 Python 中 單 一 個 等 號 「 = 」 是 指 派 ， 兩 個 等 號 「 == 」 用 來 做 關 係 比 較",
      "B": "是 將 等 號 右 方 的 資 料 值 指 派 給 等 號 左 方 的 變 數",
      "C": "使 用 指 派 運 算 子 時 ， 變 數 的 值 不 必 事 先 設 定",
      "D": "有 單 一 指 派 和 複 合 指 派 兩 種 指 派 方 式"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) 指 派 時 等 號 右 邊 的 值 （ 或 變 數 ） 必 須 先 存 在 ， 不 能 用 未 設 定 的 變 數 ， 故 此 敘",
      "A": "單 等 號 是 指 派 、 雙 等 號 是 比 較  →  正 確 。",
      "B": "指 派 是 把 右 方 值 給 左 方 變 數  →  正 確 。",
      "D": "確 有 單 一 指 派 與 複 合 指 派 ( 如  +=) →  正 確 。"
    },
    "explanation": "述 有 誤 。\n• 「 x = y 」 中  y 若 未 事 先 定 義 會  NameError ， 可 見 值 並 非 「 不 必 事 先 設 定 」 。",
    "category": "python"
  },
  {
    "id": 179,
    "set": 3,
    "original_num": 9,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "1",
      "B": "2",
      "C": "2.0",
      "D": "1.0"
    },
    "answer": "C",
    "option_exps": {
      "C": "5 ÷ 3 餘  2 ， fmod 回 傳 浮 點 數  2.0 ， 對 應  (C) 。",
      "A": "(B) 1 、 2 為 整 數 ， 但  fmod 結 果 必 為 浮 點 數  →  排 除 。",
      "D": "1.0 算 錯 餘 數 ， 5 除 以  3 餘  2 不 是  1 →  排 除 。"
    },
    "explanation": "• math.fmod(x, y) 計 算  x 除 以  y 的 餘 數 ， 且 回 傳 值 一 定 是 浮 點 數 。\n• 解 題 技 巧 ： math 模 組 的 函 式 回 傳 值 幾 乎 都 是  float ， 看 到 整 數 選 項 先 刪 。",
    "category": "python",
    "question_img": "圖片/python/q179_question.png"
  },
  {
    "id": 180,
    "set": 3,
    "original_num": 10,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "900",
      "B": "True",
      "C": "False",
      "D": "1000"
    },
    "answer": "B",
    "option_exps": {
      "B": "n=900 ： abs(1000-900)=100 ， 100<=100 成 立  →  回 傳  True ， 對 應  (B) 。",
      "A": "(D) 900 、 1000 為 數 字 ， 但 函 式  return 的 是 布 林 比 較 結 果  →  排 除 。",
      "C": "False 表 示 兩 個 條 件 都 不 成 立 ， 但  100<=100 已 成 立  →  排 除 。"
    },
    "explanation": "• near_thousand 用  or 判 斷  n 是 否 落 在  1000 或  2000 的  ±100 範 圍 內 。\n• 解 題 技 巧 ： 邊 界 值  100 是 否 含 「 等 於 」 是 關 鍵 ， <=100 代 表 剛 好  100 也 算  True 。",
    "category": "python",
    "question_img": "圖片/python/q180_question.png"
  },
  {
    "id": 181,
    "set": 3,
    "original_num": 11,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "顯 示 錯 誤",
      "B": "5",
      "C": "2",
      "D": "不 顯 示 任 何 內 容"
    },
    "answer": "D",
    "option_exps": {
      "D": "步 長 為 負 時 數 值 要 遞 減 ， 但 起 點  2 比 終 點  5 小 ， 永 遠 到 不 了  →  產 生 空 序 列 ，",
      "A": "range 參 數 合 法 ， 不 會 報 錯  →  排 除 。",
      "B": "(C) 序 列 為 空 ， 不 會 印 出  5 或  2 →  排 除 。"
    },
    "explanation": "• range(2, 5, -2) ： 起 點  2 、 終 點  5 、 步 長 為 負 的  -2 。\n迴 圈 不 執 行 ， 對 應  (D) 。\n• 解 題 技 巧 ： step 為 負 而  start<stop （ 或  step 為 正 而  start>=stop ） →  空 序\n列 、 不 執 行 。",
    "category": "python",
    "question_img": "圖片/python/q181_question.png"
  },
  {
    "id": 182,
    "set": 3,
    "original_num": 12,
    "question": "如 何 避 免 不 同 模 組 之 間 同 名 衝 突 的 問 題 ？",
    "options": {
      "A": "將 模 組 以 大 小 寫 區 分",
      "B": "絕 對 不 能 有 同 名 的 模 組",
      "C": "下 達 不 同 的 匯 入 指 令",
      "D": "將 模 組 資 源 限 定 在 模 組 的 命 名 空 間 內"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 把 模 組 資 源 限 定 在 各 自 的 命 名 空 間 (namespace) 內 ， 呼 叫 時 加 模 組 前 綴 即",
      "A": "大 小 寫 區 分 不 可 靠 ， 也 非 命 名 空 間 機 制  →  排 除 。",
      "B": "不 同 套 件 本 就 可 能 有 同 名 模 組 ， 無 法 「 絕 對 禁 止 」  →  排 除 。",
      "C": "換 匯 入 指 令 無 法 解 決 根 本 的 命 名 衝 突  →  排 除 。"
    },
    "explanation": "可 避 免 同 名 衝 突 。\n• 如  a.func() 與  b.func() ， 靠 模 組 名 區 分 ， 互 不 干 擾 。",
    "category": "python"
  },
  {
    "id": 183,
    "set": 3,
    "original_num": 13,
    "question": "關 於 下 面  if 決 策 的 程 式 碼 ， 若  x=6 ， 則 輸 出 為 何 ？",
    "options": {
      "A": "grape",
      "B": "banana",
      "C": "apple",
      "D": "orange"
    },
    "answer": "C",
    "option_exps": {
      "C": "6 % 3 == 0 成 立  →  立 即 印 出  apple 並 結 束 判 斷 ， 對 應  (C) 。",
      "A": "grape 是  else 分 支 ， 前 面 已 成 立 不 會 走 到  →  排 除 。",
      "B": "banana 需  x/2==0( 僅  x=0) ， 6 不 符  →  排 除 。",
      "D": "orange 需  (x-2)%3==0 ， 4%3=1 不 符  →  排 除 。"
    },
    "explanation": "• 由 上 往 下 檢 查  if/elif ， x=6 先 測 第 一 個 條 件 。\n• 解 題 技 巧 ： if-elif 一 旦 某 條 件 成 立 就 停 止 ， 後 面 分 支 不 再 檢 查 。",
    "category": "python",
    "question_img": "圖片/python/q183_question.png"
  },
  {
    "id": 184,
    "set": 3,
    "original_num": 14,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "13",
      "B": "135",
      "C": "1\n3",
      "D": "1\n3\n5"
    },
    "answer": "D",
    "option_exps": {
      "D": "1 / 3 / 5 多 印 了  5 （ range 不 含 終 點  5 ） →  題 庫 標 為 答 案 但 其 實 有 誤 。",
      "A": "13 、 (B) 135 把 數 字 擠 在 同 一 行 ， 與  print 換 行 不 符  →  排 除 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： D （ 1 / 3 / 5 三 行 ）\n正 確 結 果 ： C （ 1 / 3 兩 行 ） — range(1,5,2) 只 產 生  1 、 3 ， 不 含 終 點  5\n• range(1, 5, 2) ： 從  1 開 始 、 每 次  +2 、 不 含 終 點  5 →  只 產 生  1 、 3 。\n• 迴 圈  print(a) 每 圈 換 行 ， 實 際 輸 出 為 兩 行  1 、 3 。\n• 解 題 技 巧 ： range(start, stop, step) 不 含  stop ； print 每 次 都 會 換 行 。",
    "category": "python",
    "question_img": "圖片/python/q184_question.png"
  },
  {
    "id": 185,
    "set": 3,
    "original_num": 15,
    "question": "關 於 下 面  if 決 策 的 程 式 碼 ， 若  x=4 ， 則 輸 出 為 何 ？",
    "options": {
      "A": "grape",
      "B": "orange",
      "C": "banana",
      "D": "apple"
    },
    "answer": "C",
    "option_exps": {
      "C": "banana 需  x/2==0 （ 即  x=0 ） 才 會 印 ， x=4 不 可 能 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： C （ banana ）\n正 確 結 果 ： 依 圖 中  x/2==0 ： x=4 →  grape (A) ； 原 題 疑 為  x%2==0 之 誤\n• 依 圖 中 條 件 判 斷  x=4 ： x%3==0 ？ 否 ； x/2==0 ？ 4/2=2.0 ≠ 0 否 ； (x-\n2)%3==0 ？ 2 否 。\n• 研 判 ： 原 題 第 二 式 應 為  x % 2 == 0 （ 判 斷 偶 數 ） ， 若 如 此  x=4 為 偶 數 才 會 得\nbanana 。\n• 解 題 技 巧 ： / 是 除 法 、 % 才 是 取 餘 數 ； 判 斷 偶 數 要 用  x%2==0 。",
    "category": "python",
    "question_img": "圖片/python/q185_question.png"
  },
  {
    "id": 186,
    "set": 3,
    "original_num": 16,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "1",
      "C": "False",
      "D": "True"
    },
    "answer": "D",
    "option_exps": {
      "D": "5 大 於  2.0 成 立 ， 執 行  if 區 塊 印 出 字 串  'True' ， 對 應  (D) 。",
      "C": "False 是  else 分 支 ， 條 件 已 成 立 不 會 執 行  →  排 除 。",
      "A": "(B) 0 、 1 與 程 式 碼 印 出 的 內 容 無 關  →  排 除 。"
    },
    "explanation": "• 判 斷  5 > 2.0 ： 整 數 可 與 浮 點 數 直 接 比 較 大 小 。\n• 解 題 技 巧 ： 注 意  print('True') 印 的 是 字 串 ， 不 是 布 林 運 算 結 果 。",
    "category": "python",
    "question_img": "圖片/python/q186_question.png"
  },
  {
    "id": 187,
    "set": 3,
    "original_num": 17,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(10) 的 結 果 為 何 ？",
    "options": {
      "A": "36",
      "B": "28",
      "C": "55",
      "D": "45"
    },
    "answer": "C",
    "option_exps": {
      "C": "等 於  1+2+3+…+10 的 累 加  = 55 ， 對 應  (C) 。",
      "D": "45 是  1 加 到  9 的 和 ， 少 算 了  10 →  排 除 。",
      "B": "28 是  1 加 到  7 的 和  →  排 除 。",
      "A": "36 是  1 加 到  8 的 和  →  排 除 。"
    },
    "explanation": "• 遞 迴  num(n)=n+num(n-1) ， 終 止 條 件  num(0)=0 、 num(1)=1 。\n• 解 題 技 巧 ： 此 遞 迴 就 是  1~n 的 等 差 和 ， 可 用  n(n+1)/2=10×11/2=55 速 算 。",
    "category": "python",
    "question_img": "圖片/python/q187_question.png"
  },
  {
    "id": 188,
    "set": 3,
    "original_num": 18,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "18",
      "B": "6",
      "C": "18.0",
      "D": "6.0"
    },
    "answer": "D",
    "option_exps": {
      "D": "36 的 平 方 根 為  6 ， sqrt 回 傳 浮 點 數  6.0 ， 對 應  (D) 。",
      "B": "6 為 整 數 ， 但  sqrt 結 果 必 帶 小 數 點  →  排 除 。",
      "A": "(C) 18 、 18.0 是  36÷2 ， 並 非 平 方 根  →  排 除 。"
    },
    "explanation": "• math.sqrt(x) 回 傳 平 方 根 ， 且 結 果 一 定 是 浮 點 數 。\n• 解 題 技 巧 ： sqrt 是 開 根 號 不 是 除 以  2 ， 且 回 傳 值 固 定 為  float 。",
    "category": "python",
    "question_img": "圖片/python/q188_question.png"
  },
  {
    "id": 189,
    "set": 3,
    "original_num": 19,
    "question": "假 設  alist=[3,1,0,5,4,7,9,6] ， 則 下 面 程 式 片 段 的 輸 出 為 何 ？",
    "options": {
      "A": "3",
      "B": "6",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "option_exps": {
      "C": "c 最 後 累 計 為  4 ， print(c) 輸 出  4 ， 對 應  (C) 。",
      "D": "5 不 小 於  5 （ 條 件 是  x<5 ， 不 含  5 ） ， 不 應 計 入 。"
    },
    "explanation": "• 程 式 逐 一 檢 查  alist 元 素 ， 遇 到 小 於  5 的 就 把  c 加  1 。\n• alist=[3,1,0,5,4,7,9,6] 中 小 於  5 的 有  3 、 1 、 0 、 4 共  4 個 。\n• 解 題 技 巧 ： x<5 是 「 嚴 格 小 於 」 ， 邊 界 值  5 本 身 要 排 除 。",
    "category": "python",
    "question_img": "圖片/python/q189_question.png"
  },
  {
    "id": 190,
    "set": 3,
    "original_num": 20,
    "question": "試 問 下 列 程 式 碼 ， 共 有 幾 個 程 式 區 塊 ？",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "C",
    "option_exps": {
      "C": "共  3 個 ： ① 最 外 層 主 區 塊  ② while 迴 圈 主 體  ③ else 主 體 （ 最 後 的  print 又 回 到",
      "B": "2 漏 算 了 主 區 塊 或  else 其 中 之 一 。",
      "D": "4 則 多 算 了 不 存 在 的 層 次 。"
    },
    "explanation": "• 程 式 區 塊 以 縮 排 層 次 劃 分 ： 同 一 縮 排 內 的 敘 述 屬 同 一 區 塊 。\n主 區 塊 ） 。\n• 解 題 技 巧 ： 數 區 塊 ＝ 數 冒 號  : 之 後 縮 排 的 主 體 ， 再 加 最 外 層 主 程 式 。",
    "category": "python",
    "question_img": "圖片/python/q190_question.png"
  },
  {
    "id": 191,
    "set": 3,
    "original_num": 21,
    "question": "關 於 下 面  if 決 策 的 程 式 碼 ， 若  x=5 ， 則 輸 出 為 何 ？",
    "options": {
      "A": "orange",
      "B": "grape",
      "C": "apple",
      "D": "banana"
    },
    "answer": "A",
    "option_exps": {
      "A": "(x-2)%3=(3)%3=0 成 立  →  印 出  orange ， 對 應  (A) 。",
      "C": "apple 需  x%3==0 ， 但  5%3=2 不 成 立 。",
      "B": "banana 需  x/2==0 ， 5/2=2.5 不 可 能 為  0 。"
    },
    "explanation": "• if-elif 由 上 往 下 逐 條 判 斷 ， 命 中 第 一 個 成 立 的 條 件 就 停 止 。\n• x=5 ： 5%3=2 ≠ 0 （ 跳 過  apple ） ； 5/2=2.5 ≠ 0 （ 跳 過  banana ） 。",
    "category": "python",
    "question_img": "圖片/python/q191_question.png"
  },
  {
    "id": 192,
    "set": 3,
    "original_num": 22,
    "question": "關 於 下 面 二 個 程 式 的 比 較 ， 何 者 有 誤 ？  (1) (2)",
    "options": {
      "A": "return 1 是 它 們 跳 脫 遞 迴 的 出 口",
      "B": "return n*num(n-1) 是 它 們 的 遞 迴 過 程",
      "C": "(1) 程 式 屬 於 尾 歸 遞 迴",
      "D": "輸 出 結 果 不 同"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 「 輸 出 結 果 不 同 」 才 是 錯 誤 敘 述 ： 兩 者 邏 輯 相 同 、 輸 出 一 致 。",
      "A": "return 1 確 實 是 兩 程 式 跳 脫 遞 迴 的 出 口 ， 敘 述 正 確 。",
      "B": "return n*num(n-1) 正 是 遞 迴 呼 叫 過 程 ， 敘 述 正 確 。"
    },
    "explanation": "• (1)(2) 都 是 階 乘 遞 迴 ： 終 止 條 件 回 傳  1 ， 否 則 回 傳  n*num(n-1) 。\n• 解 題 技 巧 ： 把 同 一 個  n 代 入 兩 程 式 心 算 ， 結 果 相 同 即 可 刪 去  (D) 以 外 。",
    "category": "python",
    "question_imgs": [
      "圖片/python/q192_question_0.png",
      "圖片/python/q192_question_1.png"
    ]
  },
  {
    "id": 193,
    "set": 3,
    "original_num": 23,
    "question": "若 要 查 詢 目 前 工 作 資 料 夾 路 徑 ， 或 是 取 得 文 件 大 小 ， 則 需 先 匯 入 底 下 哪 個 模 組 ？",
    "options": {
      "A": "import os",
      "B": "import sys",
      "C": "import math",
      "D": "import random"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) os 模 組 提 供  os.getcwd() 、 os.path.getsize() 等 檔 案 系 統 操 作 。",
      "B": "sys 偏 向 直 譯 器 與 系 統 參 數 （ 如 版 本 、 argv ） 。",
      "C": "math 只 負 責 數 學 運 算 ， 與 檔 案 無 關 。",
      "D": "random 用 於 亂 數 產 生 ， 不 涉 及 路 徑 或 檔 案 。"
    },
    "explanation": "• 查 詢 工 作 目 錄 、 檔 案 大 小 屬 於 與 作 業 系 統 互 動 的 功 能 。",
    "category": "python"
  },
  {
    "id": 194,
    "set": 3,
    "original_num": 24,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "8",
      "B": "無 窮 迴 圈 ， 不 顯 示 任 何 內 容",
      "C": "6",
      "D": "2"
    },
    "answer": "A",
    "option_exps": {
      "A": "離 開 迴 圈 後  a=8 ， print(a) 輸 出  8 ， 對 應  (A) 。",
      "B": "條 件 最 終 會 不 成 立 ， 會 正 常 結 束 ， 並 非 無 窮 迴 圈 。"
    },
    "explanation": "• a 從  1 開 始 ， 只 要  a<6 就 把  a 乘 以  2 。\n• 迴 圈 過 程 ： 1 → 2 → 4 → 8 ， 當  a=8 時  8<6 不 成 立 而 停 止 。\n• 解 題 技 巧 ： 每 次 都 會 變 動  a ， 且 往 條 件 變 假 方 向 走 ， 必 能 結 束 。",
    "category": "python",
    "question_img": "圖片/python/q194_question.png"
  },
  {
    "id": 195,
    "set": 3,
    "original_num": 25,
    "question": "對 於  while 迴 圈 的 描 述 ， 何 者 不 正 確 ？",
    "options": {
      "A": "通 常 具 備 變 數 初 始 值 、 迴 圈 條 件 式 及 調 整 變 數 增 減 值 三 個 要 件",
      "B": "要 注 意 檢 查 離 開 迴 圈 的 條 件 是 否 存 在 ， 才 不 會 導 致 無 窮 迴 圈",
      "C": "當 判 斷 條 件 式 為 真 時 才 會 執 行 迴 圈 內 的 敘 述",
      "D": "進 入 迴 圈 並 不 會 做 條 件 檢 查"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 「 進 入 迴 圈 並 不 會 做 條 件 檢 查 」 描 述 錯 誤 ， 故 為 答 案 。",
      "A": "初 始 值 、 條 件 式 、 增 減 值 三 要 件 確 是 常 見 寫 法 ， 正 確 。",
      "B": "要 確 保 有 離 開 條 件 以 免 無 窮 迴 圈 ， 敘 述 正 確 。",
      "C": "條 件 為 真 才 執 行 迴 圈 內 敘 述 ， 正 是  while 的 特 性 。"
    },
    "explanation": "• while 屬 於 「 前 測 式 」 迴 圈 ： 每 次 進 入 迴 圈 前 都 先 檢 查 條 件 。",
    "category": "python"
  },
  {
    "id": 196,
    "set": 3,
    "original_num": 26,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "{'a': 2, 'b': 0, 'c': 5}",
      "B": "{'a': 0, 'b': 2, 'c': 5}",
      "C": "{'a': 0, 'b': 5, 'c': 2}",
      "D": "{'a': 5, 'b': 2, 'c': 5}"
    },
    "answer": "B",
    "option_exps": {
      "B": "輸 出  {'a': 0, 'b': 2, 'c': 5} ， 對 應  (B) 。",
      "A": "(C)(D) 都 把 鍵 與 值 對 錯 ， 與 傳 入 的  a=0,b=2,c=5 不 符 。"
    },
    "explanation": "• **num 會 把 所 有 「 關 鍵 字 引 數 」 收 集 成 一 個 字 典 。\n• func(a=0,b=2,c=5) 使  num={'a':0,'b':2,'c':5} ， 原 樣 回 傳 。\n• 解 題 技 巧 ： **kwargs 收 成 字 典 ， 鍵 = 參 數 名 、 值 = 傳 入 值 ， 照 抄 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q196_question.png"
  },
  {
    "id": 197,
    "set": 3,
    "original_num": 27,
    "question": "假 設  alist=[2,3,1,6,5,4,7,9,0,8] ， 則 下 面 程 式 片 段 的 輸 出 為 何 ？",
    "options": {
      "A": "6",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "answer": "C",
    "option_exps": {
      "C": "c2 累 計 為  4 ， print(c2) 輸 出  4 ， 對 應  (C) 。",
      "A": "6 是  x<6 為 假 者 的 個 數 ， 但 題 目 要 印 的 是  c2 不 是  c1 。"
    },
    "explanation": "• c1 計 數  x<6 ， c2 計 數 其 餘 （ x>=6 ） ， 最 後 只 印  c2 。\n• alist 中  >=6 的 有  6 、 7 、 9 、 8 共  4 個 。\n• 解 題 技 巧 ： 看 清 楚  print 的 是  c1 還 是  c2 ， 再 去 數 對 應 那 組 。",
    "category": "python",
    "question_img": "圖片/python/q197_question.png"
  },
  {
    "id": 198,
    "set": 3,
    "original_num": 28,
    "question": "假 設  a=b=4 ， 下 面 哪 一 個 迴 圈 指 令 不 會 執 行 ？",
    "options": {
      "A": "while a:",
      "B": "while True:",
      "C": "while a>1:",
      "D": "while a=b:"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) while a=b: 用 了 單 一  = 是 指 派 ， 語 法 錯 誤 、 根 本 無 法 執 行 。",
      "A": "while a: a=4 為 真 ， 迴 圈 會 執 行 。",
      "B": "while True: 恆 為 真 ， 會 執 行 。",
      "C": "while a>1: 4>1 成 立 ， 也 會 執 行 。"
    },
    "explanation": "• while 後 面 要 接 「 條 件 運 算 式 」 ， 而 非 指 派 敘 述 。",
    "category": "python"
  },
  {
    "id": 199,
    "set": 3,
    "original_num": 29,
    "question": "若 要 查 詢  Python 版 本 或 作 業 系 統 平 台 ， 則 需 先 匯 入 底 下 哪 個 模 組 ？",
    "options": {
      "A": "import random",
      "B": "import os",
      "C": "import math",
      "D": "import sys"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) sys 提 供  sys.version 、 sys.platform 等 版 本 與 平 台 資 訊 。",
      "B": "os 偏 向 檔 案 系 統 與 目 錄 操 作 。",
      "C": "math 只 做 數 學 運 算 。",
      "A": "random 用 於 產 生 亂 數 ， 與 版 本 資 訊 無 關 。"
    },
    "explanation": "• 查  Python 版 本 、 作 業 系 統 平 台 屬 於 直 譯 器 層 級 的 系 統 資 訊 。",
    "category": "python"
  },
  {
    "id": 200,
    "set": 3,
    "original_num": 30,
    "question": "關 於 下 面  for 迴 圈 的 程 式 片 段 ， 若 希 望 統 計 串 列 數 字 小 於  5 的 個 數 ， 則  05 行 空 白 處 可 填 何 指 令 ？",
    "options": {
      "A": "break",
      "B": "continue",
      "C": "pass()",
      "D": "exit()"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) 在  if 區 塊 末 填  continue ： 計 數 後 直 接 跳 下 一 輪 ， 不 誤 入  else 。",
      "A": "break 會 直 接 中 斷 整 個 迴 圈 ， 無 法 繼 續 統 計 。",
      "C": "pass() 寫 法 錯 誤 ， pass 是 關 鍵 字 不 加 括 號 。",
      "D": "exit() 會 結 束 整 支 程 式 ， 連  print 都 跑 不 到 。"
    },
    "explanation": "• 迴 圈 要 統 計 小 於  5 的 個 數 ： x<5 時  c1+=1 ， 其 餘 走  else 。",
    "category": "python",
    "question_img": "圖片/python/q200_question.png"
  },
  {
    "id": 201,
    "set": 3,
    "original_num": 31,
    "question": "對 於 迴 圈 的 描 述 ， 何 者 不 正 確 ？",
    "options": {
      "A": "while 迴 圈 會 先 檢 查 條 件 運 算 式",
      "B": "如 果 跳 離 迴 圈 的 條 件 設 定 不 當 ， 有 可 能 陷 入 無 窮 迴 圈",
      "C": "在 for/in 迴 圈 中 ， 還 可 以 包 含 其 他 的 for/in 迴 圈",
      "D": "巢 狀 迴 圈 內 外 迴 圈 可 以 交 錯 使 用"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 巢 狀 迴 圈 必 須 完 整 包 覆 ： 內 迴 圈 整 段 都 在 外 迴 圈 裡 ， 不 能 與 外 迴 圈 「 交 錯 」",
      "A": "while 進 入 每 一 輪 前 都 會 先 判 斷 條 件 運 算 式 ， 正 確 。",
      "B": "若 離 開 條 件 設 計 不 當 ， 條 件 永 遠 成 立 就 會 變 成 無 窮 迴 圈 ， 正 確 。",
      "C": "for/in 內 確 實 可 再 放 入 另 一 個  for/in ， 即 合 法 的 巢 狀 迴 圈 ， 正 確 。"
    },
    "explanation": "執 行 ， 此 敘 述 不 正 確 。\n• 解 題 技 巧 ： 題 目 問 「 不 正 確 」 ， 先 找 違 反 語 法 結 構 的 敘 述 即 (D) 。",
    "category": "python"
  },
  {
    "id": 202,
    "set": 3,
    "original_num": 32,
    "question": "關 於 函 數 參 數 的 傳 遞 ， 下 列 哪 種 型 態 的 變 數 是 傳 值 的 ？",
    "options": {
      "A": "字 典 變 數",
      "B": "串 列 變 數",
      "C": "集 合 變 數",
      "D": "數 值 變 數"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 數 值 是 不 可 變 物 件 ， 函 式 內 重 新 指 派 不 會 影 響 外 部 ， 屬 於 傳 值 。",
      "A": "字 典 是 可 變 物 件  →  函 式 內 修 改 會 影 響 外 部 ， 屬 傳 參 考 。",
      "B": "串 列 是 可 變 物 件  →  同 樣 會 被 函 式 內 變 更 影 響 。",
      "C": "集 合 也 是 可 變 物 件  →  不 是 傳 值 。"
    },
    "explanation": "• Python 傳 參 數 時 ， 不 可 變 物 件 （ 數 值 、 字 串 、 tuple ） 表 現 像 「 傳 值 」 ， 可 變 物\n件 （ list 、 dict 、 set ） 表 現 像 「 傳 參 考 」 。",
    "category": "python",
    "question_img": "圖片/python/q202_question.png"
  },
  {
    "id": 203,
    "set": 3,
    "original_num": 33,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(6) 的 結 果 為 何 ？",
    "options": {
      "A": "24",
      "B": "720",
      "C": "120",
      "D": "6"
    },
    "answer": "B",
    "option_exps": {
      "B": "num(6)=6*5*4*3*2*1=720 ， 對 應  (B) 。",
      "A": "24 是  4! 的 值 ， 少 算 了  5 、 6 兩 層 。",
      "C": "120 是  5! 的 值 ， 少 算 了 最 外 層 的  6 。",
      "D": "6 只 取 最 外 層  n ， 沒 有 展 開 遞 迴 。"
    },
    "explanation": "• 這 是 階 乘 遞 迴 ： n==1 回 傳  1 ， 否 則 回 傳  n*num(n-1) 。\n• 解 題 技 巧 ： num(n)=n! ， 直 接 算  6! 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q203_question.png"
  },
  {
    "id": 204,
    "set": 3,
    "original_num": 34,
    "question": "試 問 下 列 程 式 碼 ， 共 有 幾 個 程 式 區 塊 ？",
    "options": {
      "A": "2",
      "B": "1",
      "C": "4",
      "D": "3"
    },
    "answer": "D",
    "option_exps": {
      "D": "if 條 件 、 if 下 的  print 、 else 下 的  print 共 三 段 縮 排 區 塊  →  (D) 3 。",
      "B": "1 只 看 到  if 一 行 ， 漏 算  else 。",
      "A": "2 漏 算 其 中 一 個  print 區 塊 。",
      "C": "4 多 算 了 不 存 在 的 區 塊 。"
    },
    "explanation": "• 程 式 區 塊 （ block ） 指 因 縮 排 而 成 的 一 段 ： 每 個 冒 號 後 縮 排 的 內 容 算 一 個 區 塊 。",
    "category": "python",
    "question_img": "圖片/python/q204_question.png"
  },
  {
    "id": 205,
    "set": 3,
    "original_num": 35,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "0\n1\n2\n3",
      "B": "012",
      "C": "0\n1\n2",
      "D": "0123"
    },
    "answer": "B",
    "option_exps": {
      "B": "依 序 印 出  0 、 1 、 2 且 不 換 行 ， 結 果 為 「 012 」 ， 對 應  (B) 。",
      "D": "0123 ： range(3) 不 會 產 生  3 ， 最 大 只 到  2 。"
    },
    "explanation": "• for a in range(3) 會 讓  a 依 序 為  0 、 1 、 2 。\n• print(a, end=\"\") 以 空 字 串 取 代 換 行 ， 數 字 會 緊 接 著 印 在 同 一 行 。\n• 解 題 技 巧 ： range(n) 由  0 到  n-1 ， end=\"\" 表 示 不 換 行 。",
    "category": "python",
    "question_img": "圖片/python/q205_question.png"
  },
  {
    "id": 206,
    "set": 3,
    "original_num": 36,
    "question": "關 於 函 數 回 傳 值 的 說 明 下 列 何 者 有 誤 ？",
    "options": {
      "A": "可 以 包 含 一 個 以 上 的 return 指 令",
      "B": "定 義 函 數 時 一 定 要 有 回 傳 值",
      "C": "當 程 式 執 行 到 return 指 令 就 終 止 ， 然 後 將 值 傳 回",
      "D": "多 個 回 傳 值 ， 只 要 以 逗 號 （ , ） 分 隔 回 傳 值"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) 函 式 可 以 沒 有  return ； 省 略 時 自 動 回 傳  None ， 並 非 「 一 定 要 有 」 ， 此 敘 述",
      "A": "函 式 內 可 寫 多 個  return （ 搭 配 不 同 條 件 分 支 ） ， 正 確 。",
      "C": "一 旦 執 行 到  return 就 立 即 結 束 函 式 並 把 值 帶 回 ， 正 確 。",
      "D": "return a, b 以 逗 號 分 隔 即 可 一 次 回 傳 多 值 （ 以  tuple 形 式 ） ， 正 確 。"
    },
    "explanation": "有 誤 。\n• 解 題 技 巧 ： 題 目 問 「 有 誤 」 ， 找 出 說 得 太 絕 對 的 (B) 。",
    "category": "python"
  },
  {
    "id": 207,
    "set": 3,
    "original_num": 37,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  fib(6) 的 結 果 為 何 ？",
    "options": {
      "A": "13",
      "B": "3",
      "C": "8",
      "D": "5"
    },
    "answer": "C",
    "option_exps": {
      "C": "fib(6)=8 ， 對 應  (C) 。",
      "D": "5 是  fib(5) ， 少 算 一 層 。",
      "A": "13 是  fib(7) ， 多 算 一 層 。",
      "B": "3 是  fib(4) ， 差 太 多 。"
    },
    "explanation": "• 費 氏 數 列 ： fib(0)=0 ， fib(1)=fib(2)=1 ， 其 餘 為 前 兩 項 相 加 。\n• fib(3)=2 、 fib(4)=3 、 fib(5)=5 、 fib(6)=fib(5)+fib(4)=5+3=8 。",
    "category": "python",
    "question_img": "圖片/python/q207_question.png"
  },
  {
    "id": 208,
    "set": 3,
    "original_num": 38,
    "question": "下 列 哪 個 選 項 不 是 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "25 50 55 75 42 32 58 93 83 99",
      "B": "49 92 83 30 51 19 13 15 52 51",
      "C": "19 84 92 90 64 61 57 88 73 73",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "該 組 數 字 同 樣 落 在  1~99 內  →  仍 是 可 能 結 果 （ 題 庫 標 示 為 答 案 ） 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： C\n正 確 結 果 ： D （ 以 上 皆 非 ） — A/B/C 都 是  1~99 的 合 法 隨 機 結 果 ， 無 一 不 可 能\n• random.randint(1,99) 會 隨 機 產 生  1~99 （ 含  99 ） 的 整 數 ， 迴 圈 共 印  10 個 。\n• A 、 B 、 C 三 組 都 是  10 個 介 於  1~99 的 數 字 ， randint 全 都 可 能 產 生 。\n• 解 題 技 巧 ： 問 「 不 可 能 的 結 果 」 就 找 超 出 範 圍 （ 0 、 100 、 負 數 ） 或 個 數 不 符\n者 。",
    "category": "python",
    "question_img": "圖片/python/q208_question.png"
  },
  {
    "id": 209,
    "set": 3,
    "original_num": 39,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "0\n1\n2\n3",
      "B": "0\n1\n2",
      "C": "0123",
      "D": "012"
    },
    "answer": "A",
    "option_exps": {
      "A": "0 / 1 / 2 / 3 多 了 一 個  3 （ range(3) 不 含  3 ） →  題 庫 標 為 答 案 但 其 實 有 誤 。",
      "C": "0123 、 (D) 012 把 數 字 擠 在 同 一 行 ， 與  print 預 設 換 行 不 符  →  排 除 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： A （ 0 / 1 / 2 / 3 四 行 ）\n正 確 結 果 ： B （ 0 / 1 / 2 三 行 ） — range(3) 只 產 生  0 、 1 、 2\n• for a in range(3) ： a 依 序 為  0 、 1 、 2 （ 不 含  3 ） 。\n• print(a) 預 設 換 行 ， 實 際 輸 出 為 三 行  0 、 1 、 2 。\n• 解 題 技 巧 ： range(n) 由  0 到  n-1 ； print(a) 每 個 值 各 佔 一 行 。",
    "category": "python",
    "question_img": "圖片/python/q209_question.png"
  },
  {
    "id": 210,
    "set": 3,
    "original_num": 40,
    "question": "運 算 式 「 a=15%4 」 ， 變 數  a 會 儲 存 ？",
    "options": {
      "A": "0",
      "B": "4",
      "C": "3",
      "D": "5"
    },
    "answer": "C",
    "option_exps": {
      "C": "15 = 4*3 + 3 ， 餘 數 為  3 ， 故  a=3 ， 對 應  (C) 。",
      "A": "0 是 整 除 才 會 的 餘 數 ， 15 不 被  4 整 除 。",
      "B": "4 是 除 數 本 身 ， 不 是 餘 數 。",
      "D": "5 為  15//4 取 商 再 無 關 的 數 ， 皆 非 餘 數 。"
    },
    "explanation": "• % 是 取 餘 數 （ modulo ） 運 算 子 ： a = 15 % 4 取  15 除 以  4 的 餘 數 。\n• 解 題 技 巧 ： % 取 餘 數 、 // 取 商 ， 別 混 淆 。",
    "category": "python",
    "question_img": "圖片/python/q210_question.png"
  },
  {
    "id": 211,
    "set": 3,
    "original_num": 41,
    "question": "當 索 引 邊 界 值 發 生 例 外 時 ， 可 使 用 哪 個 內 建 型 別 來 捕 捉 例 外 ？",
    "options": {
      "A": "ValueError",
      "B": "IndexError",
      "C": "IndentationError",
      "D": "NameError"
    },
    "answer": "C",
    "option_exps": {
      "C": "IndentationError 是 程 式 縮 排 錯 誤 、 屬 語 法 層 級  →  與 索 引 無 關 （ 題 庫 卻 標"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： C （ IndentationError ）\n正 確 結 果 ： IndexError （ 顯 示 於 選 項  B ） — 索 引 越 界 的 正 確 例 外 型 別\n• 存 取 串 列 ／ 字 串 時 索 引 超 出 範 圍 （ 索 引 邊 界 例 外 ） ， Python 丟 出 的 是\nIndexError 。\n示 為 答 案 ） 。\n✗ ValueError 是 值 不 合 法 （ 如  int('abc') ） 、 NameError 是 用 到 未 定 義 名 稱 。\n• 解 題 技 巧 ： 索 引 越 界 ＝ IndexError ， 認 準 關 鍵 字  Index 。",
    "category": "python",
    "question_img": "圖片/python/q211_question.png"
  },
  {
    "id": 212,
    "set": 3,
    "original_num": 42,
    "question": "假 設  a=0; b=1 ， 並 且 定 義 函 數  def func(a, b): ， 請 問 下 面 哪 一 個 是 錯 誤 的 引 用 ？",
    "options": {
      "A": "func(a=0, b=1)",
      "B": "func(a, b=1)",
      "C": "func(a, b)",
      "D": "func(a=0, b)"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) func(a=0, b) 先 用 了 關 鍵 字 引 數  a=0 ， 後 面 又 放 位 置 引 數  b →  語 法 錯 誤",
      "A": "func(a=0, b=1) 全 部 用 關 鍵 字 引 數 ， 合 法 。",
      "B": "func(a, b=1) 位 置 引 數 在 前 、 關 鍵 字 在 後 ， 合 法 。",
      "C": "func(a, b) 兩 個 都 是 位 置 引 數 ， 合 法 。"
    },
    "explanation": "• Python 函 式 呼 叫 規 則 ： 位 置 引 數 必 須 排 在 關 鍵 字 引 數 之 前 。\nSyntaxError 。\n• 解 題 技 巧 ： 關 鍵 字 引 數 後 不 能 再 接 位 置 引 數 。",
    "category": "python"
  },
  {
    "id": 213,
    "set": 3,
    "original_num": 43,
    "question": "試 問 下 列 程 式 碼 ， 輸 出 結 果 為 何 ？",
    "options": {
      "A": "4",
      "B": "6",
      "C": "5",
      "D": "3"
    },
    "answer": "A",
    "option_exps": {
      "A": "每 輪  k=k+i ： 1+0=1 、 1+1=2 、 2+2=4 ， 最 後  print(k) 印 出  4 ， 對 應  (A) 。",
      "C": "5 、 (B) 6 是 把  range 算 成  1~3 或 多 加 了 一 輪 。",
      "D": "3 漏 算 了  i=2 那 一 輪 的 累 加 。"
    },
    "explanation": "• k 初 值 為  1 ， for i in range(3) 會 讓  i 依 序 取  0 、 1 、 2 。\n• 解 題 技 巧 ： range(3) 給 的 是  0 、 1 、 2 ， 不 含  3 ， 逐 輪 累 加 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q213_question.png"
  },
  {
    "id": 214,
    "set": 3,
    "original_num": 44,
    "question": "假 設  s1=\"b0 b1 b2\"; s2={\"b0\", \"b1\", \"b2\"}; s3=[\"b0\", \"b1\", \"b2\"] ， 下 面 哪 一 個 迴 圈 指 令 執 行 的 次 數 不 同 ？",
    "options": {
      "A": "for i in s3:",
      "B": "for i in s2:",
      "C": "for i in range(3):",
      "D": "for i in s1:"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) for i in s1 跑  8 次 ， 與 其 他 三 者 ( 各  3 次 ) 不 同 ， 故 選  (D) 。",
      "B": "s2 是 含  3 元 素 的 集 合  →  跑  3 次 。",
      "A": "s3 是 含  3 元 素 的 串 列  →  跑  3 次 。",
      "C": "range(3) →  跑  3 次 。"
    },
    "explanation": "• s1=\"b0 b1 b2\" 是 字 串 ， for 會 逐 字 元 走 訪 ， 含 空 格 共  8 個 字 元 。\n• 解 題 技 巧 ： 走 訪 字 串 是 「 逐 字 元 」 ， 別 誤 以 為 是 逐 單 字 。",
    "category": "python",
    "question_img": "圖片/python/q214_question.png"
  },
  {
    "id": 215,
    "set": 3,
    "original_num": 45,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 若 為 『 現 在 日 期 與 時 間  : Sun Dec 15 09:22:41 2019 』 ， 第 二 行 空 格 應 填 入\n哪 一 個 字 元 ？",
    "options": {
      "A": "N",
      "B": "n",
      "C": "c",
      "D": "C"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) %c 代 表 當 地 慣 用 的 「 完 整 日 期 與 時 間 」 表 示 ， 正 好 符 合 此 格 式 。",
      "A": "(D) %N 、 %C 並 非  strftime 的 有 效 指 令 字 元 。",
      "B": "%n 只 是 輸 出 換 行 字 元 ， 不 會 印 出 日 期 時 間 。"
    },
    "explanation": "• 目 標 輸 出 含 星 期 、 月 、 日 、 時 間 、 年 （ Sun Dec 15 09:22:41 2019 ） 的 完 整 格\n式 。\n• 解 題 技 巧 ： 要 一 次 帶 出 完 整 日 期 時 間 ， 記 得 用  %c 。",
    "category": "python",
    "question_img": "圖片/python/q215_question.png"
  },
  {
    "id": 216,
    "set": 3,
    "original_num": 46,
    "question": "關 於 定 義 函 數 的 說 明 下 列 何 者 有 誤 ？",
    "options": {
      "A": "沒 有 回 傳 值 時 ， 函 數 會 自 動 回 傳 None 物 件",
      "B": "函 數 的 程 式 指 令 區 塊 必 須 縮 排",
      "C": "定 義 函 數 時 一 定 要 傳 入 參 數",
      "D": "Python 定 義 函 數 是 使 用 關 鍵 字 「 def 」"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) 有 誤 ： 函 數 不 一 定 要 有 參 數 ， 可 定 義 成  def f(): 完 全 不 收 參 數 。",
      "A": "正 確 ： 沒 有  return 時 函 數 會 自 動 回 傳  None 。",
      "B": "正 確 ： 函 數 的 指 令 區 塊 必 須 縮 排 。",
      "D": "正 確 ： Python 以 關 鍵 字  def 定 義 函 數 。"
    },
    "explanation": "• 解 題 技 巧 ： 題 目 問 「 有 誤 」 ， 挑 出 絕 對 化 敘 述 （「 一 定 要 」） 最 可 疑 。",
    "category": "python",
    "question_img": "圖片/python/q216_question.png"
  },
  {
    "id": 217,
    "set": 3,
    "original_num": 47,
    "question": "關 於 下 面  if 決 策 的 程 式 碼 ， 若  x=7 ， 則 輸 出 為 何 ？",
    "options": {
      "A": "banana",
      "B": "grape",
      "C": "apple",
      "D": "orange"
    },
    "answer": "B",
    "option_exps": {
      "B": "三 個 條 件 皆 為 假 ， 落 到  else ， 印 出  grape ， 對 應  (B) 。",
      "C": "apple 需  x%3==0 ， 7 不 符 。",
      "A": "banana 需  x/2==0 ， 幾 乎 不 可 能 成 立 。",
      "D": "orange 需  (x-2)%3==0 ， 7 不 符 。"
    },
    "explanation": "• x=7 逐 條 檢 查 ： 7%3=1 ≠ 0 、 7/2=3.5 ≠ 0 、 (7-2)%3=5%3=2 ≠ 0 ， 全 不 成 立 。\n• 解 題 技 巧 ： if-elif 由 上 往 下 逐 條 判 斷 ， 全 假 才 走  else 。",
    "category": "python",
    "question_img": "圖片/python/q217_question.png"
  },
  {
    "id": 218,
    "set": 3,
    "original_num": 48,
    "question": "關 於 函 數 參 數 的 傳 遞 ， 下 列 哪 種 型 態 的 變 數 是 傳 址 的 ？",
    "options": {
      "A": "布 林 變 數",
      "B": "字 串 變 數",
      "C": "數 值 變 數",
      "D": "串 列 變 數"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 串 列 是 可 變 物 件 ， 傳 入 函 數 時 以 「 傳 址 」 處 理 ， 函 數 內 修 改 會 影 響 原",
      "A": "(B)(C) 布 林 、 字 串 、 數 值 皆 為 不 可 變 物 件 ， 屬 「 傳 值 」 性 質 。"
    },
    "explanation": "串 列 。\n• 解 題 技 巧 ： 可 變 物 件 (list 、 dict 、 set) 傳 址 ； 不 可 變 物 件 (int 、 str 、\nbool 、 tuple) 傳 值 。",
    "category": "python",
    "question_img": "圖片/python/q218_question.png"
  },
  {
    "id": 219,
    "set": 3,
    "original_num": 49,
    "question": "你 編 寫 一 個 函 數 可 以 讀 取 檔 案 並 輸 出 檔 案 中 的 每 一 行 ， 如 下 的 程 式 碼 ， 其 中 包 含 的 行 號 只 是 做 為 參 考 ，\n執 行 到 第 三 行 時 會 發 生 錯 誤 ， 請 問 原 因 為 何 ？",
    "options": {
      "A": "你 需 要 匯 入 os 函 數 庫",
      "B": "path 物 件 中 不 存 在 isfile 方 法",
      "C": "isfile 方 法 需 要 兩 個 參 數",
      "D": "path 方 法 並 不 存 在 os 物 件 中"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 缺 少  import os ， 執 行 到 該 行 才 會 報  NameError ， 需 先 匯 入  os 函 數 庫 。",
      "B": "(D) os.path.isfile 是 存 在 的 合 法 方 法 ， 並 非 不 存 在 。",
      "C": "isfile 只 需 一 個 路 徑 參 數 ， 不 是 兩 個 。"
    },
    "explanation": "• 第 三 行  os.path.isfile(file) 用 到  os 模 組 ， 但 程 式 從 未  import os 。\n• 解 題 技 巧 ： 用  os.path.* 前 一 定 要 先  import os 。",
    "category": "python",
    "question_img": "圖片/python/q219_question.png"
  },
  {
    "id": 220,
    "set": 3,
    "original_num": 50,
    "question": "關 於 函 數 與 參 數 傳 遞 的 說 明 下 列 何 者 有 誤 ？",
    "options": {
      "A": "河 內 塔 問 題 使 用 遞 迴 式 與 佇 列 觀 念 來 解 決 問 題",
      "B": "可 變 物 件 （ Mutable Object ）（ 如 清 單 ） ， 傳 遞 引 數 時 以 「 傳 址 」 處 理",
      "C": "區 域 變 數 適 用 於 所 宣 告 的 函 數 或 流 程 控 制 的 程 式 區 塊",
      "D": "一 個 函 數 或 副 程 式 ， 是 由 自 身 所 定 義 或 呼 叫 的 ， 就 稱 為 遞 迴"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 有 誤 ： 河 內 塔 是 用 「 遞 迴  + 堆 疊 (stack) 」 觀 念 ， 而 非 佇 列 (queue) 。",
      "B": "正 確 ： 可 變 物 件 ( 如  list) 傳 引 數 時 以 傳 址 處 理 。",
      "C": "正 確 ： 區 域 變 數 只 在 所 宣 告 的 函 數 或 區 塊 內 有 效 。",
      "D": "正 確 ： 函 數 呼 叫 自 身 即 為 遞 迴 。"
    },
    "explanation": "• 解 題 技 巧 ： 河 內 塔 = 遞 迴 + 堆 疊 ， 看 到 「 佇 列 」 就 知 有 誤 。",
    "category": "python",
    "question_img": "圖片/python/q220_question.png"
  },
  {
    "id": 221,
    "set": 3,
    "original_num": 51,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(8) 的 結 果 為 何 ？",
    "options": {
      "A": "55",
      "B": "36",
      "C": "45",
      "D": "28"
    },
    "answer": "B",
    "option_exps": {
      "B": "num(8)=8+7+6+5+4+3+2+1=36 ， 對 應  (B) 。",
      "A": "55 是  1~10 的 和 ， 多 算 了 。",
      "C": "45 是  1~9 的 和 。",
      "D": "28 是  1~7 的 和 ， 少 算 了  8 那 一 層 。"
    },
    "explanation": "• num(n)=n+num(n-1) ， base case n=0 或  1 回 傳  n ， 等 於  1+2+…+n 的 累 加 。\n• 解 題 技 巧 ： 此 式 為 等 差 和 ， n×(n+1)/2 = 8×9/2 = 36 。",
    "category": "python",
    "question_img": "圖片/python/q221_question.png"
  },
  {
    "id": 222,
    "set": 3,
    "original_num": 52,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "135",
      "B": "1\n3\n5",
      "C": "13",
      "D": "1\n3"
    },
    "answer": "C",
    "option_exps": {
      "C": "配 合  end=\" \" 印 出 「 1 3 」 ， 對 應  (C) 。",
      "A": "135 是 誤 以 為 包 含  5 （ 1,3,5 ） 才 會 出 現 的 結 果 。"
    },
    "explanation": "• range(1, 5, 2) ： 從  1 開 始 、 每 次  +2 、 且 不 含 終 值  5 ， 因 此 只 產 生  1 、 3 。\n• 解 題 技 巧 ： range 一 律 「 含 頭 不 含 尾 」 ， 下 一 個 值 等 於 終 值 即 停 止 。",
    "category": "python",
    "question_img": "圖片/python/q222_question.png",
    "question_imgs": [
      "圖片/python/q222_question_0.png",
      "圖片/python/q222_question_1.png"
    ]
  },
  {
    "id": 223,
    "set": 3,
    "original_num": 53,
    "question": "對 於  for/in 迴 圈 的 描 述 ， 何 者 不 正 確 ？",
    "options": {
      "A": "for 迴 圈 可 以 走 訪 任 何 序 列 項 目",
      "B": "計 數 器 要 有 起 始 值 和 終 止 值",
      "C": "巢 狀 迴 圈 架 構 ， 迴 圈 間 不 可 交 錯",
      "D": "遞 增 值 預 設 加 2"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 不 正 確 ： for 迴 圈 的 遞 增 值 預 設 加  1 ， 不 是 加  2 。",
      "A": "正 確 ： for 可 走 訪 任 何 序 列 (list 、 str 、 tuple…) 。",
      "B": "正 確 ： 計 數 型 迴 圈 需 有 起 始 值 與 終 止 值 。",
      "C": "正 確 ： 巢 狀 迴 圈 須 完 整 包 覆 ， 不 可 交 錯 。"
    },
    "explanation": "• 解 題 技 巧 ： range 的  step 預 設 是  1 ， 看 到 「 預 設 加  2 」 即 錯 。",
    "category": "python"
  },
  {
    "id": 224,
    "set": 3,
    "original_num": 54,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(5) 的 結 果 為 何 ？",
    "options": {
      "A": "120",
      "B": "6",
      "C": "720",
      "D": "24"
    },
    "answer": "A",
    "option_exps": {
      "A": "num(5)=5×4×3×2×1=120 ， 對 應  (A) 。",
      "C": "720 是  6! 的 值 ， 多 乘 了 一 層 。",
      "D": "24 是  4! ， 少 乘 了  5 。",
      "B": "6 是  3! 的 值 ， 差 太 多 。"
    },
    "explanation": "• num(n)=n*num(n-1) ， base case n=1 回 傳  1 ， 即 為 階 乘  n! 。\n• 解 題 技 巧 ： return n*num(n-1) 是 典 型 階 乘 遞 迴 ， 5! = 120 。",
    "category": "python",
    "question_img": "圖片/python/q224_question.png"
  },
  {
    "id": 225,
    "set": 3,
    "original_num": 55,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "531",
      "B": "53",
      "C": "5\n3\n1",
      "D": "5\n3"
    },
    "answer": "B",
    "option_exps": {
      "B": "print(a, end=\"\") 不 換 行 直 接 相 連 ， 輸 出  53 ， 對 應  (B) 。",
      "A": "531 是 把 終 點 誤 含 到  1 。"
    },
    "explanation": "• range(5, 1, -2) 由  5 開 始 、 每 次 減  2 、 到  1 前 停 止 ， 故 取  5 、 3 。\n✗終 點  1 不 會 被 取 到 ( 範 圍 是 「 到  1 之 前 」 ) 。\n• 解 題 技 巧 ： range 的 終 止 值 不 含 在 內 ， 負  step 時 遞 減 取 值 。",
    "category": "python",
    "question_img": "圖片/python/q225_question.png"
  },
  {
    "id": 226,
    "set": 3,
    "original_num": 56,
    "question": "你 正 在 編 寫 的 程 式 碼 用 來 生 成 隨 機 整 數 ， 最 小 值 為  3 ， 最 大 值 為  8 ， 你 應 該 使 用 哪 兩 種 函 數 ？  (1)random.randrange(3,9,1)\n(2)random.randrange(3,8,1) (3)random.randint(3,8) (4)random.randint(3,9)",
    "options": {
      "A": "(1)(3)",
      "B": "(3)(4)",
      "C": "(2)(3)",
      "D": "(1)(2)"
    },
    "answer": "A",
    "option_exps": {
      "A": "要 產 生  3~8 ： randrange(3,9) 的 上 界  9 不 含 、 最 大 到  8 ； randint(3,8) 直 接 含  8 。 對 應"
    },
    "explanation": "• randint(a,b) 兩 端 皆 含 （ 閉 區 間 ） ； randrange(start,stop,step) 不 含  stop 。\n(1)(3) 。\n✗ (2) randrange(3,8) 最 大 只 到  7 ， 少 了  8 。\n✗ (4) randint(3,9) 會 多 出  9 ， 超 出 範 圍 。\n• 解 題 技 巧 ： randrange 的  stop 要 『 多  1 』 ， randint 的 上 界 直 接 寫 目 標 最 大 值 。",
    "category": "python",
    "question_img": "圖片/python/q226_question.png"
  },
  {
    "id": 227,
    "set": 3,
    "original_num": 57,
    "question": "執 行 下 面 的 程 式 ， 請 問 第  03 行 的 輸 出 為 何 ？",
    "options": {
      "A": "200",
      "B": "TypeError",
      "C": "10000",
      "D": "100"
    },
    "answer": "A",
    "option_exps": {
      "A": "第  03 行 （ 函 式 內  print ） 輸 出  200 ， 對 應  (A) 。",
      "D": "100 是 函 式 外 那 個  num ， 不 是 第  03 行 的 輸 出 。",
      "B": "整 數 相 乘 不 會  TypeError ； (C) 10000 是 平 方 而 非 乘  2 。"
    },
    "explanation": "• 函 式 內  num=num*2 只 改 動 區 域 變 數 ， 但 第  03 行  print 印 的 就 是 這 個 被 加 倍\n後 的 值 。\n• 呼 叫  func(num) 傳 入  100 ， 內 部  num 變 成  100*2=200 ， 第  03 行 印 出  200 。",
    "category": "python",
    "question_img": "圖片/python/q227_question.png"
  },
  {
    "id": 228,
    "set": 3,
    "original_num": 58,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "False",
      "B": "1",
      "C": "0",
      "D": "True"
    },
    "answer": "D",
    "option_exps": {
      "D": "條 件 成 立 執 行  print('True') ， 畫 面 顯 示  True ， 對 應  (D) 。",
      "A": "False 是  else 區 塊 的 內 容 ， 條 件 成 立 不 會 執 行 。",
      "B": "(C) 1 、 0 都 不 是 這 段 程 式 會 印 出 的 內 容 。"
    },
    "explanation": "• 5>2 為  True ， 會 走  if 區 塊 ； 印 的 是 字 串  'True' 而 非 布 林 值 。\n• 解 題 技 巧 ： 先 判 斷 條 件 真 假 ， 再 看 對 應 分 支 印 的 是 哪 個 字 串 。",
    "category": "python",
    "question_img": "圖片/python/q228_question.png"
  },
  {
    "id": 229,
    "set": 3,
    "original_num": 59,
    "question": "假 設  a=0; b=1 ， 並 且 定 義 函 數  def func(a=0, b=1): ， 請 問 下 面 哪 一 個 是 錯 誤 的 引 用 ？",
    "options": {
      "A": "func(a=0, b=1)",
      "B": "func(a, b=1)",
      "C": "func(a=0, b)",
      "D": "func(a, b)"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) func(a=0, b) ： a=0 是 關 鍵 字 引 數 ， 後 面 卻 接 位 置 引 數  b →  SyntaxError ，",
      "A": "全 用 關 鍵 字 引 數 ， 合 法 。",
      "B": "func(a, b=1) ： 位 置 在 前 、 關 鍵 字 在 後 ， 合 法 。",
      "D": "func(a, b) ： 兩 個 都 是 位 置 引 數 ， 合 法 。"
    },
    "explanation": "• Python 規 定 ： 位 置 引 數 必 須 寫 在 關 鍵 字 引 數 之 前 ， 不 可 在 關 鍵 字 引 數 後 再 放 位\n置 引 數 。\n為 錯 誤 引 用 。",
    "category": "python"
  },
  {
    "id": 230,
    "set": 3,
    "original_num": 60,
    "question": "下 面 指 令 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1",
      "B": "True",
      "C": "False",
      "D": "0"
    },
    "answer": "B",
    "option_exps": {
      "B": "'b' > 'a' 成 立 ， print 輸 出 布 林 值  True ， 對 應  (B) 。",
      "C": "False →  與 比 較 結 果 相 反 。",
      "A": "(D) 1 、 0 ： 比 較 運 算 回 傳 的 是  True/False ， 不 是 數 字 。"
    },
    "explanation": "• 字 串 比 大 小 是 逐 字 元 比  Unicode （ 字 典 序 ） ： 'b' 的 碼  98 大 於  'a' 的 碼  97 。\n• 解 題 技 巧 ： 字 母 比 大 小 看 字 典 序 ， 後 面 的 字 母 比 較 大 。",
    "category": "python",
    "question_img": "圖片/python/q230_question.png"
  },
  {
    "id": 231,
    "set": 3,
    "original_num": 61,
    "question": "執 行 下 面 的 程 式 ， 請 問 最 後 一 行 的 輸 出 為 何 ？",
    "options": {
      "A": "TypeError",
      "B": "10000",
      "C": "200",
      "D": "100"
    },
    "answer": "D",
    "option_exps": {
      "D": "最 後 一 行 輸 出  100 ， 對 應  (D) 。",
      "C": "200 是 函 式 內 部 印 出 的 值 ， 不 是 最 後 一 行 。",
      "A": "不 會  TypeError ； (B) 10000 是 平 方 的 結 果 。"
    },
    "explanation": "• 函 式 內 把  num 加 倍 只 影 響 區 域 變 數 ， 並 不 會 改 到 函 式 外 的  num 。\n• func(num) 執 行 完 後 ， 最 外 層 的  num 仍 是  100 ， 最 後 一 行  print(num) 印 出\n100 。",
    "category": "python",
    "question_img": "圖片/python/q231_question.png"
  },
  {
    "id": 232,
    "set": 3,
    "original_num": 62,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "8",
      "B": "8.0",
      "C": "16.0",
      "D": "16"
    },
    "answer": "C",
    "option_exps": {
      "C": "結 果 為  16.0 ， 對 應  (C) 。",
      "D": "16 ： 少 了 小 數 點 ， 那 是 內 建  pow(4,2) 或  4**2 的 整 數 結 果 。",
      "A": "(B) 8 、 8.0 是  4*2 的 乘 法 結 果 ， 誤 把 次 方 當 乘 法 。"
    },
    "explanation": "• math.pow() 不 論 引 數 是 否 為 整 數 ， 回 傳 值 一 律 是 浮 點 數  float 。\n• math.pow(4, 2) 計 算  4 的  2 次 方  = 16 ， 但 型 別 是  float →  顯 示  16.0 。",
    "category": "python",
    "question_img": "圖片/python/q232_question.png"
  },
  {
    "id": 233,
    "set": 3,
    "original_num": 63,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "5.0",
      "B": "4.0",
      "C": "7.5",
      "D": "6.0"
    },
    "answer": "A",
    "option_exps": {
      "A": "輸 出  5.0 ， 對 應  (A) 。",
      "D": "6.0 、 (B) 4.0 、 (C) 7.5 皆 非  sqrt(25) 的 值 。"
    },
    "explanation": "• 兩 點 距 離 公 式 ： sqrt((x1-x2)²+(y1-y2)²) 。 p1=[4,0] 、 p2=[7,4] 。\n• (4-7)²=9 ， (0-4)²=16 ， 相 加  25 ， sqrt(25)=5.0 （ sqrt 回 傳  float ） 。\n• 解 題 技 巧 ： 這 是 經 典  3-4-5 直 角 三 角 形 ， 斜 邊 必 為  5 。",
    "category": "python",
    "question_img": "圖片/python/q233_question.png"
  },
  {
    "id": 234,
    "set": 3,
    "original_num": 64,
    "question": "請 問 執 行  for i in \"ILoveYou\": 的 迴 圈 指 令 ， 迴 圈 總 共 會 執 行 幾 次 ？",
    "options": {
      "A": "1",
      "B": "10",
      "C": "8",
      "D": "3"
    },
    "answer": "C",
    "option_exps": {
      "C": "迴 圈 執 行  8 次 ， 對 應  (C) 。",
      "A": "1 ： 字 串 並 非 整 體 只 跑 一 次 。",
      "B": "10 、 (D) 3 都 與 字 元 數  8 不 符 。"
    },
    "explanation": "• for 走 訪 字 串 時 ， 會 一 個 字 元 跑 一 次 ， 次 數 等 於 字 串 長 度 。\n• \"ILoveYou\" 為  I-L-o-v-e-Y-o-u 共  8 個 字 元 。",
    "category": "python",
    "question_img": "圖片/python/q234_question.png"
  },
  {
    "id": 235,
    "set": 3,
    "original_num": 65,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "6",
      "B": "8",
      "C": "2",
      "D": "無 窮 迴 圈 ， 不 顯 示 任 何 內 容"
    },
    "answer": "A",
    "option_exps": {
      "A": "最 後  a=6 ， 輸 出  6 ， 對 應  (A) 。",
      "D": "不 會 無 窮 迴 圈 ， a 持 續 增 加 終 會  ≥ 6 。",
      "B": "8 、 (C) 2 都 不 是 離 開 迴 圈 時 的  a 值 。"
    },
    "explanation": "• a=0 ， while a<6 時  a 每 次 加  2 ： 0 → 2 → 4 → 6 。\n• 當  a 變 成  6 時  6<6 不 成 立 ， 迴 圈 結 束 ； print 在 迴 圈 外 ， 只 印 一 次 。",
    "category": "python",
    "question_img": "圖片/python/q235_question.png"
  },
  {
    "id": 236,
    "set": 3,
    "original_num": 66,
    "question": "下 面 指 令 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "1",
      "C": "False",
      "D": "True"
    },
    "answer": "C",
    "option_exps": {
      "C": "結 果 為  False ， 對 應  (C) 。",
      "D": "True →  與 比 較 結 果 相 反 。",
      "A": "(B) 0 、 1 ： 比 較 運 算 回 傳  True/False ， 不 是 數 字 。"
    },
    "explanation": "• 字 串 比 大 小 依  Unicode 碼 ： '5' 是  53 、 'a' 是  97 。\n• 53 > 97 不 成 立 ， print('5' > 'a') 輸 出  False 。\n• 解 題 技 巧 ： 數 字 字 元 （ 碼  48~57 ） 一 定 小 於 英 文 字 母 ， 故  '5'<'a' 。",
    "category": "python",
    "question_img": "圖片/python/q236_question.png"
  },
  {
    "id": 237,
    "set": 3,
    "original_num": 67,
    "question": "關 於  Python 的 函 數 說 明 下 列 何 者 有 誤 ？",
    "options": {
      "A": "呼 叫 函 數 時 使 用 括 號 「 ( ) 」 運 算 子",
      "B": "引 數 分 為 位 置 引 數 與 關 鍵 字 引 數",
      "C": "無 法 採 用 預 設 引 數 的 方 式",
      "D": "關 鍵 字 引 數 的 位 置 並 不 一 定 要 依 照 參 數 順"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) 敘 述 「 無 法 採 用 預 設 引 數 的 方 式 」 與 事 實 相 反  →  為 有 誤 選 項 。",
      "A": "呼 叫 函 式 確 實 用 括 號  ( ) 運 算 子 ， 正 確 。",
      "B": "引 數 確 分 為 位 置 引 數 與 關 鍵 字 引 數 ， 正 確 。",
      "D": "關 鍵 字 引 數 可 不 照 參 數 順 序 傳 入 ， 正 確 。"
    },
    "explanation": "• Python 函 式 完 全 支 援 預 設 引 數 ， 例 如  def f(a=0, b=1): ， 呼 叫 時 可 省 略 對 應 引\n數 。",
    "category": "python",
    "question_img": "圖片/python/q237_question.png"
  },
  {
    "id": 238,
    "set": 3,
    "original_num": 68,
    "question": "假 設  a=0; b=1 ， 並 且 定 義 函 數  def func(**num): ， 請 問 下 面 哪 一 個 是 正 確 的 引 用 ？",
    "options": {
      "A": "func(a, b=1)",
      "B": "func(a=0, b)",
      "C": "func(a, b)",
      "D": "func(a=0, b=1)"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) func(a=0, b=1) 全 部 用 關 鍵 字 傳 入  →  會 收 進  num={'a':0,'b':1} ， 完 全 合 法 。",
      "A": "func(a, b=1) ： a 是 位 置 引 數 ， **num 無 法 接 收 位 置 引 數 。",
      "B": "func(a=0, b) ： 關 鍵 字 後 又 出 現 位 置 引 數  b →  SyntaxError 。",
      "C": "func(a, b) ： 兩 個 都 是 位 置 引 數  →  無 法 傳 入  **num 。"
    },
    "explanation": "• **num 是 「 關 鍵 字 引 數 收 集 器 」 ， 呼 叫 時 所 有 引 數 都 必 須 用 「 名 稱 = 值 」 的 形 式 傳 入 。\n• 解 題 技 巧 ： 看 到  ** 參 數 ， 呼 叫 時 一 律 要 寫 成  名 稱 = 值 。",
    "category": "python",
    "question_img": "圖片/python/q238_question.png"
  },
  {
    "id": 239,
    "set": 3,
    "original_num": 69,
    "question": "for/in 迴 圈 每 執 行 一 次 ， 如 果 增 減 值 沒 有 特 別 指 定 ， 預 設 值 為 何 ？",
    "options": {
      "A": "0",
      "B": "-1",
      "C": "1",
      "D": "3"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) range 的 預 設 增 減 值 是  1 ， 每 跑 一 圈 計 數 加  1 。",
      "A": "0 ： 若 步 長 為  0 會 原 地 踏 步 ， Python 也 會 直 接 報 錯 。",
      "B": "-1 ： 那 是 遞 減 ， 需 自 己 明 確 指 定 ， 不 是 預 設 。",
      "D": "3 ： 步 長 必 須 自 行 寫 成  range(start, stop, 3) 才 會 是  3 。"
    },
    "explanation": "• for/in 搭 配  range 時 ， 未 指 定  step （ 增 減 值 ） 就 採 用 預 設 值 。\n• 解 題 技 巧 ： range(n) 等 同  range(0, n, 1) ， 預 設 步 長 就 是  1 。",
    "category": "python",
    "question_img": "圖片/python/q239_question.png"
  },
  {
    "id": 240,
    "set": 3,
    "original_num": 70,
    "question": "試 問 下 列 程 式 碼 中 ， 最 後  k 值 會 為 多 少 ？",
    "options": {
      "A": "14",
      "B": "13",
      "C": "12",
      "D": "10"
    },
    "answer": "A",
    "option_exps": {
      "A": "k=14 時  14<=13 為 假 ， 跳 出 迴 圈 ， 最 後 印 出  14 →  對 應  (A) 。",
      "B": "13 是 「 最 後 一 次 仍 進 迴 圈 時 的 值 」 ， 但 進 去 後 又 加 了  1 。",
      "C": "12 (D)10 ： 少 算 了 好 幾 圈 的 累 加 。"
    },
    "explanation": "• 程 式 ： k=10 ； while k<=13: k+=1 ， 迴 圈 結 束 後  print(k) 。\n• 逐 圈 追 蹤 ： k=10 → 11 → 12 → 13 都 滿 足  <=13 ， 各 加  1 ； k=13 進 迴 圈 後 變  14 。\n• 解 題 技 巧 ： while 條 件 用  <= ， 跳 出 時 的 值 通 常 會 比 上 界 多  1 。",
    "category": "python",
    "question_img": "圖片/python/q240_question.png"
  },
  {
    "id": 241,
    "set": 3,
    "original_num": 71,
    "question": "關 於 下 面 二 個 程 式 的 比 較 ， 何 者 正 確 ？  (1) (2)",
    "options": {
      "A": "程 式 區 塊 個 數 相 同",
      "B": "(1) 程 式 輸 出 為 7",
      "C": "(2) 程 式 不 見 得 會 有 輸 出",
      "D": "輸 出 結 果 相 同"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) 兩 支 程 式 輸 出 結 果 都 是  4 ， 完 全 相 同 。",
      "A": "區 塊 數 不 同 ： (2) 多 了  else 區 塊 。",
      "B": "(C) 兩 者 皆 會 輸 出  4 ， (1) 不 是  7 、 (2) 也 一 定 有 輸 出 。"
    },
    "explanation": "• (1) k=1 ， for i in range(3) 累 加  0+1+2 ， 迴 圈 外  print(k) →  1+3=4 。\n• (2) k=1 ， 同 樣 累 加 ， 差 別 只 是 把  print 放 進  for...else 區 塊 。\n• for/else 的  else 在 迴 圈 正 常 跑 完 後 必 定 執 行 一 次 ， 故  (2) 也 印 出  4 。",
    "category": "python",
    "question_imgs": [
      "圖片/python/q241_question_0.png",
      "圖片/python/q241_question_1.png"
    ]
  },
  {
    "id": 242,
    "set": 3,
    "original_num": 72,
    "question": "假 設  a=0; b=1 ， 並 且 定 義 下 面 函 數 ， 請 問 下 面 哪 一 個 引 用 的 結 果 跟 其 他 不 同 ？",
    "options": {
      "A": "func(0, 1)",
      "B": "func(0, b=1)",
      "C": "func(a=0, 1)",
      "D": "func(a, b)"
    },
    "answer": "C",
    "option_exps": {
      "C": "(C) func(a=0, 1) ： 關 鍵 字 引 數  a=0 後 面 又 接 位 置 引 數  1 →  SyntaxError ， 與 其 他 不",
      "A": "func(0, 1) ： 兩 個 位 置 引 數 ， 正 常 回 傳  1 。",
      "B": "func(0, b=1) ： 位 置 在 前 、 關 鍵 字 在 後 ， 合 法 回 傳  1 。",
      "D": "func(a, b) ： a 、 b 已 是  0 、 1 ， 正 常 回 傳  1 。"
    },
    "explanation": "• 函 數  def func(a, b): return a+b ， 傳 入  0 與  1 時 應 回 傳  1 。\n同 。\n• 解 題 技 巧 ： 位 置 引 數 一 定 要 排 在 關 鍵 字 引 數 前 面 ， 否 則 語 法 錯 誤 。",
    "category": "python",
    "question_img": "圖片/python/q242_question.png"
  },
  {
    "id": 243,
    "set": 3,
    "original_num": 73,
    "question": "你 正 在 編 寫 使 用  randint 函 數 的 應 用 程 式 ， 這 個 程 式 必 須 使 用 名 稱  rd 引 用 該 函 數 ， 你 需 要 導 入 該 函 數 ，\n你 應 該 使 用 哪 個 程 式 碼 片 段 ？",
    "options": {
      "A": "import random.randint as s rd",
      "B": "import randint from random as rd",
      "C": "from random.randint rd",
      "D": "from random import randint as rd"
    },
    "answer": "D",
    "option_exps": {
      "D": "(D) from random import randint as rd ： 標 準 的 「 指 定 匯 入 並 改 名 」 寫 法 。",
      "A": "import random.randint as s rd ： 語 法 錯 誤 ， import 不 能 這 樣 取 單 一 函 數 。",
      "B": "import randint from random ： from 與  import 順 序 顛 倒  →  錯 誤 。",
      "C": "from random.randint rd ： 缺 少  import 關 鍵 字  →  語 法 錯 誤 。"
    },
    "explanation": "• 需 求 ： 只 匯 入  random 模 組 裡 的  randint ， 並 改 名 為  rd 使 用 。\n• 解 題 技 巧 ： 改 名 匯 入 單 一 函 數 固 定 句 型 為  from 模 組  import 名 稱  as 別 名 。",
    "category": "python",
    "question_img": "圖片/python/q243_question.png"
  },
  {
    "id": 244,
    "set": 3,
    "original_num": 74,
    "question": "下 面 指 令 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "1",
      "B": "True",
      "C": "0",
      "D": "False"
    },
    "answer": "D",
    "option_exps": {
      "D": "65 > 97 為 假 ， 所 以  print('A' > 'a') 印 出  False →  對 應  (D) 。",
      "B": "True ： 方 向 相 反 ， 大 寫 字 母 碼 值 其 實 比 小 寫 小 。",
      "A": "1 (C)0 ： 比 較 運 算 回 傳 的 是 布 林 值  True/False ， 不 是 數 字 。"
    },
    "explanation": "• 字 串 比 較 是 逐 字 元 比  Unicode （ ASCII ） 碼 值 ： 'A'=65 、 'a'=97 。\n• 解 題 技 巧 ： ASCII 中 大 寫  A~Z 在 前 、 小 寫  a~z 在 後 ， 大 寫 一 律 比 較 小 。",
    "category": "python",
    "question_img": "圖片/python/q244_question.png"
  },
  {
    "id": 245,
    "set": 3,
    "original_num": 75,
    "question": "試 問 下 列 程 式 碼 ， 共 有 幾 個 程 式 區 塊 ？",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "answer": "B",
    "option_exps": {
      "B": "一 個 主 區 塊  + 一 個  for 內 部 區 塊 ， 共  2 個  →  對 應  (B) 。",
      "A": "1 ： 忽 略 了 迴 圈 內 的 縮 排 子 區 塊 。",
      "C": "3 (D)4 ： 此 程 式 並 沒 有 那 麼 多 層 縮 排 。"
    },
    "explanation": "• 程 式 ： k=1 ； for i in range(3): k=k+i ； print(k) ， 問 縮 排 形 成 幾 個 程 式 區 塊 。\n• 主 程 式 本 身 算 一 個 區 塊 （ k=1 、 for 、 print 都 在 最 外 層 ） 。\n• for 迴 圈 內 縮 排 的  k=k+i 另 成 一 個 區 塊 。",
    "category": "python",
    "question_img": "圖片/python/q245_question.png"
  },
  {
    "id": 246,
    "set": 3,
    "original_num": 76,
    "question": "下 面 程 式 碼 會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "8",
      "B": "無 窮 迴 圈 ， 不 顯 示 任 何 內 容",
      "C": "6",
      "D": "2"
    },
    "answer": "B",
    "option_exps": {
      "B": "a 卡 在  0 不 會 變 大 ， 形 成 無 窮 迴 圈 ， print 永 遠 執 行 不 到  →  對 應  (B) 。",
      "A": "8 (C)6 ： 誤 以 為  a 會 持 續 倍 增 到  >=6 。",
      "D": "2 ： 0 乘 以 任 何 數 都 還 是  0 ， 不 會 變 成  2 。"
    },
    "explanation": "• 程 式 ： a=0 ； while a<6: a=a*2 ， 迴 圈 外  print(a) 。\n• a 初 值  0 ， 第 一 圈  a=0*2 仍 是  0 ， 條 件  0<6 永 遠 成 立 。\n• 解 題 技 巧 ： 0 乘  2 永 遠 是  0 ， 初 值 為  0 的 乘 法 遞 增 極 易 造 成 死 迴 圈 。",
    "category": "python",
    "question_img": "圖片/python/q246_question.png"
  },
  {
    "id": 247,
    "set": 3,
    "original_num": 77,
    "question": "試 問 下 列 程 式 碼 ， 輸 出 結 果 為 何 ？",
    "options": {
      "A": "1",
      "B": "3",
      "C": "4",
      "D": "2"
    },
    "answer": "A",
    "option_exps": {
      "A": "else 區 塊 把  k 改 回  1 ， 最 後  print(k) 印 出  1 →  對 應  (A) 。",
      "B": "3 (C)4 ： 那 是 迴 圈 跑 到 一 半 或 剛 跳 出 時 的  k ， 被  else 覆 寫 掉 了 。",
      "D": "2 ： 與 實 際 追 蹤 不 符 。"
    },
    "explanation": "• 程 式 ： k=1 ； while k<=3: k+=1 else: k=1 ， 最 後  print(k) 。\n• while 迴 圈 ： k=1 → 2 → 3 → 4 ， 當  k=4 時  4<=3 為 假 而 正 常 結 束 。\n• while/else 的  else 在 迴 圈 非  break 結 束 時 執 行 ， 把  k 重 設 為  1 。",
    "category": "python",
    "question_img": "圖片/python/q247_question.png"
  },
  {
    "id": 248,
    "set": 3,
    "original_num": 78,
    "question": "關 於 下 面  for 迴 圈 的 程 式 片 段 ， 若 希 望 印 出 所 有 小 於  5 的  x ， 則 空 白 行 處 應 填 何 指 令 ？",
    "options": {
      "A": "exit()",
      "B": "continue",
      "C": "pass()",
      "D": "break"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) continue ： 略 過 本 輪 剩 餘 程 式 、 跳 到 下 一 個  x ， 正 好 過 濾 掉  >=5 的 值 。",
      "A": "exit() ： 會 直 接 結 束 整 支 程 式 ， 後 面 的  x 都 不 再 處 理 。",
      "C": "pass() ： pass 不 需 括 號 （ pass() 反 而 出 錯 ） ， 且  pass 什 麼 都 不 做 、 不 會 跳 過 。",
      "D": "break ： 會 整 個 中 斷 迴 圈 ， 遇 到 第 一 個  >=5 就 停 ， 後 面 小 於  5 的 也 印 不 到 。"
    },
    "explanation": "• 需 求 ： 印 出 串 列 中 所 有 「 小 於  5 」 的  x ； 當  x>=5 時 不 要 印 ， 直 接 跳 下 一 輪 。\n• 解 題 技 巧 ： 要 「 跳 過 這 一 筆 、 繼 續 下 一 筆 」 用  continue ； 要 「 整 個 停 止 」 才 用  break 。",
    "category": "python",
    "question_img": "圖片/python/q248_question.png"
  },
  {
    "id": 249,
    "set": 3,
    "original_num": 79,
    "question": "關 於 下 面  for 迴 圈 的 程 式 片 段 ， 若 希 望  x=7 時 離 開 ， 則 空 白 行 處 應 填 何 指 令 ？",
    "options": {
      "A": "exit",
      "B": "break",
      "C": "continue",
      "D": "pass"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) break ： 立 即 中 斷 並 跳 出 整 個  for 迴 圈 ， 符 合 「 x=7 時 離 開 」 。",
      "A": "exit ： 要  exit() 才 會 結 束 程 式 ， 且 那 是 結 束 整 支 程 式 而 非 離 開 迴 圈 。",
      "C": "continue ： 只 略 過 本 輪 、 繼 續 下 一 個  x ， 並 不 會 離 開 迴 圈 。",
      "D": "pass ： 佔 位 用 、 什 麼 都 不 做 ， 迴 圈 照 常 往 下 跑 。"
    },
    "explanation": "• 需 求 ： 在  for 迴 圈 中 ， 當  x=7 （ x==7 ） 時 就 要 離 開 迴 圈 。\n• 解 題 技 巧 ： 「 離 開 ／ 跳 出 迴 圈 」 的 關 鍵 字 是  break 。",
    "category": "python",
    "question_img": "圖片/python/q249_question.png"
  },
  {
    "id": 250,
    "set": 3,
    "original_num": 80,
    "question": "執 行 下 面 的 程 式 ， 請 問 第  07 行 的 輸 出 為 何 ？",
    "options": {
      "A": "100",
      "B": "10000",
      "C": "TypeError",
      "D": "200"
    },
    "answer": "D",
    "option_exps": {
      "D": "第  07 行  print(num) 印 出 已 被 改 成  200 的 全 域  num →  (D) 。",
      "A": "100 是 把  func() 當 成 沒 影 響 全 域  →  與  global 矛 盾 。",
      "C": "TypeError 不 會 發 生 ， 整 數 乘 法 完 全 合 法 。"
    },
    "explanation": "• global num 讓 函 式 內 的  num 直 接 綁 定 到 全 域 變 數 ， 而 非 建 立 區 域 變 數 。\n• num=100 ， 呼 叫  func() 後  num=num*2=200 ， 並 更 新 全 域  num 。\n• 解 題 技 巧 ： 看 到  global ， 函 式 內 的 修 改 會 直 接 改 到 外 面 的 同 名 變 數 。",
    "category": "python",
    "question_img": "圖片/python/q250_question.png"
  },
  {
    "id": 251,
    "set": 4,
    "original_num": 1,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "11",
      "B": "9",
      "C": "10",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "print(y) 不 在 迴 圈 內 ， 最 後  y 停 在  9 →  (B) 。",
      "C": "10 是  x 結 束 時 的 值 ， 但 題 目 印 的 是  y 。",
      "A": "11 沒 有 任 何 步 驟 會 讓  y 變 成  11 。"
    },
    "explanation": "• x=y=0 。 外 層  while x<9 每 次  x+=2 ； 內 層  while y<9 每 次  y+=3 。\n• 第 一 輪  x=2 後 進 內 層 ： y=3 、 6 、 9 後 停 ； 之 後  y 已 =9 ， 內 層 再 也 不 執 行 。\n• 解 題 技 巧 ： 內 層 條 件 一 旦 不 再 成 立 就 不 會 重 跑 ， y 只 會 被 加 到 剛 好  ≥ 9 。",
    "category": "python",
    "question_img": "圖片/python/q251_question.png"
  },
  {
    "id": 252,
    "set": 4,
    "original_num": 2,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "1",
      "B": "24",
      "C": "120",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "印 出  120 →  (C) 。",
      "A": "1 是 把 迴 圈 當 成 沒 執 行  →  與  range(5,1,-1) 有  4 個 值 矛 盾 。",
      "B": "24 漏 乘 了  5 （ 誤 以 為  range 到  4 為 止 ） 。"
    },
    "explanation": "• s(5) ： p=1 ， for x in range(5,1,-1) 取  x=5,4,3,2 累 乘 。\n• p=1*5*4*3*2=120 。\n• 解 題 技 巧 ： range(5,1,-1) 不 含 終 點  1 ， 故 為  5,4,3,2 。",
    "category": "python",
    "question_img": "圖片/python/q252_question.png"
  },
  {
    "id": 253,
    "set": 4,
    "original_num": 3,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "執 行 錯 誤",
      "B": "[2, 3, 5, 7]",
      "C": "[7, 5, 3, 2]",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "對 應  (B) 。",
      "C": "[7,5,3,2] 是 由 大 到 小 ， 需 加  reverse=True 才 會 這 樣 。",
      "A": "執 行 錯 誤 ： sorted() 對 數 字 串 列 完 全 合 法 ， 不 會 出 錯 。"
    },
    "explanation": "• sorted() 回 傳 一 個 由 小 到 大 排 序 的 新 串 列 ， 原 串 列 不 變 。\n• 對  [5, 3, 7, 2] 排 序 結 果 為  [2, 3, 5, 7] 。\n• 解 題 技 巧 ： sorted() 預 設 遞 增 ； 要 遞 減 得 用  reverse=True 。",
    "category": "python",
    "question_img": "圖片/python/q253_question.png"
  },
  {
    "id": 254,
    "set": 4,
    "original_num": 4,
    "question": "下 面 是 插 入 排 序 法 的 主 要 程 式 片 段 ， 假 設  a=[3, 6, 4, 2] ， 請 問 執 行 後 ， 第  04 列 的 資 料 交 換 會 執 行 幾\n次 ？",
    "options": {
      "A": "2",
      "B": "5",
      "C": "4",
      "D": "3"
    },
    "answer": "C",
    "option_exps": {
      "C": "合 計  0+1+3=4 次  →  (C) 。"
    },
    "explanation": "• 插 入 排 序  a=[3,6,4,2] ， 第  04 列 每 執 行 一 次 即 一 次 交 換 。\n• i=1 ： 3>6 不 成 立  →  0 次 。\n• i=2 ： 6>4 交 換 成  [3,4,6,2] ， 再 比  3>4 不 成 立  →  1 次 。\n• i=3 ： 6>2 → 2>4 前 依 序 換  3 次 成  [2,3,4,6] →  3 次 。\n• 解 題 技 巧 ： 插 入 排 序 的 交 換 次 數 等 於 原 陣 列 的 逆 序 對 數 目 。",
    "category": "python",
    "question_img": "圖片/python/q254_question.png"
  },
  {
    "id": 255,
    "set": 4,
    "original_num": 5,
    "question": "若 有  16 筆 已 經 排 序 的 資 料 ， 使 用 『 二 分 搜 尋 法 』 搜 尋 某 個 數 字 ， 最 差 情 況 要 搜 尋 幾 次 ？",
    "options": {
      "A": "5",
      "B": "16",
      "C": "4",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "對 應  (A) 5 。",
      "B": "16 是 循 序 搜 尋 （ 逐 筆 找 ） 的 最 差 次 數 ， 非 二 分 搜 尋 。",
      "C": "4 只 算 到  log2(16)=4 ， 漏 掉 最 後 縮 到  1 筆 那 次 比 對 。"
    },
    "explanation": "• 二 分 搜 尋 每 次 把 範 圍 砍 半 ， 最 差 次 數 約 為  log2(n) 再 加 判 斷 。\n• 16 筆 ： 16 → 8 → 4 → 2 → 1 ， 並 含 最 後 一 次 比 對 ， 最 差 需  5 次 。\n• 解 題 技 巧 ： 二 分 搜 尋 最 差 次 數 可 用 「 能 找 的 最 大 筆 數  2^k−1 ≥  n 」 推  k 。",
    "category": "python",
    "question_img": "圖片/python/q255_question.png"
  },
  {
    "id": 256,
    "set": 4,
    "original_num": 6,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "8",
      "B": "5",
      "C": "13",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "fibonacci(7)=13 →  (C) 。",
      "A": "8 是 第  6 項  fib(6) ， 少 算 一 項 。",
      "B": "5 是 第  5 項  fib(5) ， 更 少 。"
    },
    "explanation": "• 費 氏 數 列 ： n ≤ 2 回 傳  1 ， 否 則  fib(n-1)+fib(n-2) 。\n• 數 列 依 序 為  1,1,2,3,5,8,13 （ 第  1 到 第  7 項 ） 。\n• 解 題 技 巧 ： n ≤ 2 都 回  1 ， 從 第  3 項 起 每 項 為 前 兩 項 相 加 。",
    "category": "python",
    "question_img": "圖片/python/q256_question.png"
  },
  {
    "id": 257,
    "set": 4,
    "original_num": 7,
    "question": "下 面 是 選 擇 排 序 法 的 主 要 程 式 片 段 ， 假 設  a=[4, 7, 3, 2] ， 請 問 執 行 後 ， 第  05 列 的 變 數  min 會 被 改 變 幾\n次 ？",
    "options": {
      "A": "4",
      "B": "2",
      "C": "5",
      "D": "3"
    },
    "answer": "A",
    "option_exps": {
      "A": "合 計  2+1+1=4 次  →  (A) 。"
    },
    "explanation": "• 選 擇 排 序  a=[4,7,3,2] ， 數 第  05 列  min=j 被 執 行 幾 次 。\n• i=0 ： 4>3 → min=2 ， 3>2 → min=3 ， 共  2 次 。\n• i=1 （ [2,7,3,4] ） ： 7>3 → min=2 ， 共  1 次 。\n• i=2 （ [2,3,7,4] ） ： 7>4 → min=3 ， 共  1 次 ； i=3 無 內 層  0 次 。\n• 解 題 技 巧 ： min=j 只 在 找 到 更 小 元 素 時 才 執 行 ， 逐 輪 累 加 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q257_question.png"
  },
  {
    "id": 258,
    "set": 4,
    "original_num": 8,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "1",
      "B": "120",
      "C": "5",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "印 出  120 →  (B) 。",
      "A": "1 是 把 遞 迴 當 成 沒 展 開 （ 只 看  base case ） 。",
      "C": "5 只 取 了  n 本 身 ， 沒 做 連 乘 。"
    },
    "explanation": "• fun(n) ： n==1 回 傳  1 ， 否 則 回 傳  n*fun(n-1) ， 即 階 乘 。\n• fun(5)=5*4*3*2*1=120 。\n• 解 題 技 巧 ： n*fun(n-1) 的 遞 迴 就 是  n! 階 乘 。",
    "category": "python",
    "question_img": "圖片/python/q258_question.png"
  },
  {
    "id": 259,
    "set": 4,
    "original_num": 9,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "9",
      "B": "18",
      "C": "20",
      "D": "10"
    },
    "answer": "B",
    "option_exps": {
      "B": "印 出  18 →  (B) 。",
      "D": "10 漏 算 了 內 層 對  x 的 累 加 。"
    },
    "explanation": "• 外 層  x 取  1~9 ； 內 層 每 輪  range(1,10) 跑  9 次 ， 每 次  x+=1 。\n• x 是 迴 圈 變 數 ： 每 進 外 層 會 被 重 設 ， 但  print(x) 在 迴 圈 外 。\n• 最 後 一 輪 外 層  x=9 ， 內 層 加  9 個  1 →  x=18 ， 之 後  range 耗 盡 結 束 。\n• 解 題 技 巧 ： 用  for 變 數 當 被 改 的 對 象 時 ， 最 後 值 由 最 後 一 輪 決 定 。",
    "category": "python",
    "question_img": "圖片/python/q259_question.png"
  },
  {
    "id": 260,
    "set": 4,
    "original_num": 10,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "25",
      "B": "20",
      "C": "24",
      "D": "26"
    },
    "answer": "B",
    "option_exps": {
      "B": "印 出  20 →  (B) 。",
      "A": "25 把  1+3+5+7+9 等 奇 數 相 加 ， 非 本 題 的 偶 數 。",
      "C": "24 多 算 了  x=10 那 一 項 （ 但 條 件  x<10 已 不 成 立 ） 。"
    },
    "explanation": "• sum=0 ， x=2 ， while x<10 ： sum+=x 後  x+=2 。\n• x 依 序 取  2,4,6,8 （ x=10 時 停 ） ， sum=2+4+6+8=20 。\n• 解 題 技 巧 ： while x<10 不 含  10 ， 最 後 加 總 到  8 為 止 。",
    "category": "python",
    "question_img": "圖片/python/q260_question.png"
  },
  {
    "id": 261,
    "set": 4,
    "original_num": 11,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "54",
      "B": "99",
      "C": "100",
      "D": "55"
    },
    "answer": "A",
    "option_exps": {
      "A": "印 出  54 →  (A) 。",
      "D": "55 是  0+45 之 外 多 算  1 ， 或 把 外 層 初 值 算 成  10 。"
    },
    "explanation": "• 外 層  x 取  1~9 ； 內 層  range(1,10) 讓  y=1..9 ， 每 次  x+=y 。\n• 內 層 一 輪 會 把  x 增 加  1+2+…+9=45 。\n• 最 後 一 輪 外 層  x=9 ， 內 層 加  45 →  x=54 ， print(x) 在 迴 圈 外 。\n• 解 題 技 巧 ： x 的 最 終 值 ＝ 最 後 一 輪 外 層 的  x 值 ＋ 內 層 累 加 總 和 。",
    "category": "python",
    "question_img": "圖片/python/q261_question.png"
  },
  {
    "id": 262,
    "set": 4,
    "original_num": 12,
    "question": "演 算 法 的 特 性 不 包 括 ？",
    "options": {
      "A": "允 許 無 窮 迴 路",
      "B": "至 少 會 有 一 個 輸 出 結 果",
      "C": "步 驟 清 楚 且 可 行",
      "D": "0 個 或 多 個 輸 入 資 料"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 「 允 許 無 窮 迴 路 」 違 反 演 算 法 的 有 限 性  →  正 是 「 不 包 括 」 的 特 性 。",
      "B": "演 算 法 至 少 要 有 一 個 輸 出 ， 是 基 本 特 性 。",
      "C": "步 驟 須 明 確 且 可 行 ， 是 基 本 特 性 。",
      "D": "輸 入 可 為  0 個 或 多 個 ， 是 基 本 特 性 。"
    },
    "explanation": "• 演 算 法 須 在 有 限 步 驟 內 結 束 ， 必 須 能 停 機 ， 不 可 以 無 窮 迴 圈 。\n• 解 題 技 巧 ： 演 算 法 五 大 特 性 記 「 有 限 、 明 確 、 輸 入 、 輸 出 、 有 效 」 ， 唯 獨 不 能 無 限 。",
    "category": "python",
    "question_img": "圖片/python/q262_question.png"
  },
  {
    "id": 263,
    "set": 4,
    "original_num": 13,
    "question": "執 行 底 下 程 式 碼 ， 輸 出 第 一 筆 的 資 料 內 容 為 ？",
    "options": {
      "A": "[1, 2, 3, 4, 5, 6, 7]",
      "B": "[3, 5, 1, 6, 2, 4, 7]",
      "C": "[1, 3, 2, 4, 5, 6, 7]",
      "D": "[3, 1, 5, 2, 4, 6, 7]"
    },
    "answer": "B",
    "option_exps": {
      "B": "第 一 筆 （ i=0 結 束 ） 為  [3, 5, 1, 6, 2, 4, 7] →  對 應  (B) ， 7 已 沉 到 最 右 。",
      "A": "是 完 全 排 序 後 的 結 果 ， 不 是 第 一 輪 。",
      "C": "(D) 與 第 一 輪 交 換 過 程 不 符 。"
    },
    "explanation": "• 這 是 氣 泡 排 序 ， print(list) 在 外 層  for i 之 內 ， 每 跑 完 一 輪  i 就 印 一 次 。\n• 第 一 輪  i=0 ： 把 最 大 值 往 右 推 ， 逐 次 比 較 相 鄰 並 交 換 。\n• 解 題 技 巧 ： 氣 泡 排 序 第 一 輪 只 保 證 「 最 大 值 」 歸 位 到 最 後 一 格 。",
    "category": "python",
    "question_img": "圖片/python/q263_question.png"
  },
  {
    "id": 264,
    "set": 4,
    "original_num": 14,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  fib(6) 的 結 果 為 何 ？",
    "options": {
      "A": "3",
      "B": "5",
      "C": "8",
      "D": "13"
    },
    "answer": "C",
    "option_exps": {
      "C": "fib(6)=8 →  對 應  (C) 。",
      "B": "5 是  fib(5) 。",
      "A": "3 是  fib(4) 。",
      "D": "13 是  fib(7) ， 多 算 一 層 。"
    },
    "explanation": "• fib ： n 為  0 或  1 回 傳  n ， n==2 回 傳  1 ， 其 餘 回 傳  fib(n-1)+fib(n-2) 。\n• 依 序 算 ： fib(3)=2 、 fib(4)=3 、 fib(5)=5 、 fib(6)=fib(5)+fib(4)=5+3 。",
    "category": "python",
    "question_img": "圖片/python/q264_question.png"
  },
  {
    "id": 265,
    "set": 4,
    "original_num": 15,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "3",
      "B": "124578",
      "C": "123456789",
      "D": "12"
    },
    "answer": "D",
    "option_exps": {
      "D": "只 印 出 「 12 」 →  對 應  (D) 。",
      "C": "123456789 是 把 整 個 範 圍 印 完 ， 忽 略 了  break 。",
      "B": "124578 像 是  continue 跳 過  3 的 倍 數 ， 但 這 裡 是  break 。"
    },
    "explanation": "• 迴 圈  x 從  1 到  8 ， 遇 到  x%3==0 就  break 跳 出 ， 否 則  print(x, end=\"\") 同 列 輸 出 。\n• x=1 印  1 、 x=2 印  2 、 x=3 時  3%3==0 →  break 結 束 。\n• 解 題 技 巧 ： break 一 遇 到 就 整 個 跳 出 ； continue 才 是 只 跳 過 該 次 。",
    "category": "python",
    "question_img": "圖片/python/q265_question.png"
  },
  {
    "id": 266,
    "set": 4,
    "original_num": 16,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "120",
      "B": "24",
      "C": "1",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "p 維 持 初 值  1 ， print(p) 印 出  1 →  對 應  (C) 。",
      "A": "120=5! 是 把 它 當 成 正 確 的 階 乘 計 算 。",
      "B": "24=4! 也 是 誤 算 成 有 跑 迴 圈 。"
    },
    "explanation": "• s(5) ： p=1 ， 迴 圈  for x in range(5, 1) 。\n• range(5, 1) 起 點 大 於 終 點 且 步 長 為  1 ， 產 生 空 序 列 ， 迴 圈 一 次 都 不 跑 。\n• 解 題 技 巧 ： range( 大 , 小 ) 不 給 負 步 長 就 是 空 的 ， 迴 圈 不 執 行 。",
    "category": "python",
    "question_img": "圖片/python/q266_question.png"
  },
  {
    "id": 267,
    "set": 4,
    "original_num": 17,
    "question": "下 面 是 二 元 搜 尋 法 的 函 數 內 容 ， 請 問 第  06 列 應 填 什 麼 指 令 ？",
    "options": {
      "A": "binary_search(a, start, mid-1, x)",
      "B": "binary_search(a, start-1, mid-1, x)",
      "C": "binary_search(a, start, mid, x)",
      "D": "binary_search(a, start-1, mid, x)"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) binary_search(a, start, mid-1, x) →  正 確 縮 小 到 左 半 。",
      "C": "用  mid 沒 扣  1 ， 可 能 重 複 檢 查  mid 造 成 無 窮 遞 迴 。",
      "B": "(D) 動 到  start-1 會 超 出 範 圍 ， 且 方 向 錯 誤 。"
    },
    "explanation": "• 二 元 搜 尋 ： arr[mid] > hkey 表 示 目 標 比 中 間 值 小 ， 要 往 「 左 半 邊 」 找 。\n• 左 半 邊 範 圍 是  start 到  mid-1 ， 下 一 層 遞 迴  end 改 成  mid-1 、 start 不 變 。\n• 解 題 技 巧 ： 往 左 找 改  end=mid-1 ， 往 右 找 改  start=mid+1 。",
    "category": "python",
    "question_img": "圖片/python/q267_question.png"
  },
  {
    "id": 268,
    "set": 4,
    "original_num": 18,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(6) 的 結 果 為 何 ？",
    "options": {
      "A": "24",
      "B": "120",
      "C": "6",
      "D": "720"
    },
    "answer": "D",
    "option_exps": {
      "D": "6! = 720 →  對 應  (D) 。",
      "A": "24=4! 。",
      "B": "120=5! ， 少 乘 一 層 。",
      "C": "6 只 是  n 本 身 。"
    },
    "explanation": "• num 是 階 乘 遞 迴 ： n==1 回 傳  1 ， 否 則 回 傳  n*num(n-1) 。\n• num(6)=6*5*4*3*2*1=6! 。",
    "category": "python",
    "question_img": "圖片/python/q268_question.png"
  },
  {
    "id": 269,
    "set": 4,
    "original_num": 19,
    "question": "定 義 下 面 的 函 數 ， 請 問 執 行  func1(42, 39) ， 其 回 傳 值 為 和 ？",
    "options": {
      "A": "2",
      "B": "4",
      "C": "3",
      "D": "1"
    },
    "answer": "C",
    "option_exps": {
      "C": "回 傳  a=3 ， 即  gcd(42,39)=3 →  對 應  (C) 。",
      "D": "1 不 是  42 、 39 的 最 大 公 因 數 。",
      "A": "(B) 2 、 4 也 都 不 能 整 除  42 與  39 。"
    },
    "explanation": "• func1 是 輾 轉 相 除 法 求 最 大 公 因 數 （ GCD ） ， while(b) 在  b ≠ 0 時 持 續 取 餘 數 。\n• func1(42,39) ： r=42%39=3 → (39,3) ； r=39%3=0 → (3,0) ； b=0 停 止 。\n• 解 題 技 巧 ： 認 出 輾 轉 相 除 法 後 ， 直 接 求 兩 數 的 最 大 公 因 數 即 可 。",
    "category": "python",
    "question_img": "圖片/python/q269_question.png"
  },
  {
    "id": 270,
    "set": 4,
    "original_num": 20,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "50",
      "B": "55",
      "C": "45",
      "D": "66"
    },
    "answer": "B",
    "option_exps": {
      "B": "fib(10)=fib(9)+fib(8)=34+21=55 →  對 應  (B) 。",
      "A": "(C)(D) 50 、 45 、 66 皆 非 費 氏 數 列 項 。"
    },
    "explanation": "• fib ： n==0 回 傳  0 、 n==1 或  2 回 傳  1 ， 其 餘 回 傳  fib(n-1)+fib(n-2) 。\n• 費 氏 數 列 ： 0,1,1,2,3,5,8,13,21,34,55… （ 第  0 項 起 算 ） 。\n• 解 題 技 巧 ： 費 氏 數 列 背 到  fib(10)=55 ， 遇 此 題 可 直 接 秒 選 。",
    "category": "python",
    "question_img": "圖片/python/q270_question.png"
  },
  {
    "id": 271,
    "set": 4,
    "original_num": 21,
    "question": "定 義 下 面 的 函 數 ， 請 問 第  03 行 的  while 條 件 可 以 用 下 面 哪 一 個 條 件 取 代 ？",
    "options": {
      "A": "b! = 0",
      "B": "b > 0",
      "C": "True",
      "D": "b==0"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) b!=0 與  while(b) 完 全 等 價 ： b 非 零 時 繼 續 、 為 零 時 停 止 。",
      "B": "b>0 漏 掉  b 為 負 數 的 情 形 ， 與 原 意 不 同 。",
      "C": "True 會 變 成 無 窮 迴 圈 ， 永 遠 不 會 停 。",
      "D": "b==0 條 件 相 反 ， 反 而 一 開 始 就 不 進 迴 圈 。"
    },
    "explanation": "• while(b) 的 條 件 是 「 b 為 真 值 」 ， 整 數 只 要 不 是  0 就 視 為  True 。\n• 解 題 技 巧 ： while( 數 值 ) 等 同  while( 數 值  != 0) 。",
    "category": "python",
    "question_img": "圖片/python/q271_question.png",
    "question_imgs": [
      "圖片/python/q271_question_0.png",
      "圖片/python/q271_question_1.png"
    ]
  },
  {
    "id": 272,
    "set": 4,
    "original_num": 22,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "26",
      "B": "20",
      "C": "25",
      "D": "24"
    },
    "answer": "C",
    "option_exps": {
      "C": "sum=1+3+5+7+9=25 →  對 應  (C) 。",
      "A": "26 、 (D) 24 都 是 把 奇 數 加 錯 一 項 。",
      "B": "20 漏 算 了 某 一 項 。"
    },
    "explanation": "• sum=0 、 x=1 ， while x<10 ： 每 輪 先  sum=sum+x ， 再  x=x+2 （ 只 加 奇 數 ） 。\n• x 依 序 為  1,3,5,7,9 ， 到  x=11 時  11<10 為 假 而 停 止 。\n• 解 題 技 巧 ： x 每 次  +2 故 只 累 加 奇 數  1~9 ， 共  5 個 奇 數 和 為  25 。",
    "category": "python",
    "question_img": "圖片/python/q272_question.png"
  },
  {
    "id": 273,
    "set": 4,
    "original_num": 23,
    "question": "試 問 下 列 程 式 碼 中 ， 哪 個 選 項 不 可 能 輸 出 ？",
    "options": {
      "A": "6",
      "B": "8",
      "C": "2",
      "D": "4"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) 6 是  3 的 倍 數 ， 被  continue 跳 過  →  不 可 能 輸 出 。",
      "B": "8 、 (C) 2 、 (D) 4 都 不 是  3 的 倍 數 ， 會 正 常 印 出 。"
    },
    "explanation": "• 迴 圈  x 從  1 到  8 ， 遇  x%3==0 就  continue 跳 過 該 次 ， 不 執 行  print 。\n• 被 跳 過 的 是  3 的 倍 數 ： 3 、 6 ； 其 餘  1,2,4,5,7,8 都 會 印 出 。\n• 解 題 技 巧 ： continue 只 略 過 「 條 件 成 立 」 那 次 ， 本 題 即  3 的 倍 數 不 印 。",
    "category": "python",
    "question_img": "圖片/python/q273_question.png"
  },
  {
    "id": 274,
    "set": 4,
    "original_num": 24,
    "question": "下 面 是 交 換 排 序 法 的 主 要 程 式 片 段 ， 假 設  a=[4, 7, 3, 2] ， 請 問 執 行 後 ， 第  04 列 的 資 料 交 換 會 執 行 幾\n次 ？",
    "options": {
      "A": "4",
      "B": "2",
      "C": "3",
      "D": "5"
    },
    "answer": "D",
    "option_exps": {
      "D": "累 計  2+2+1=5 次 交 換 ， 對 應  (D) 。",
      "A": "4 、 (B)2 、 (C)3 都 少 算 了 某 幾 輪 的 交 換 。"
    },
    "explanation": "• 交 換 排 序 ： 外 層  i 固 定 ， 內 層  j 從  i+1 起 ， 只 要  a[i]>a[j] 就 交 換 。\n• i=0 ： 4>3 換 、 3>2 換 （ 2 次 ） ； i=1 ： 7>4 換 、 7>3 換 （ 2 次 ） ； i=2 ： 4>3\n換 （ 1 次 ） 。\n• 解 題 技 巧 ： 逐 輪 畫 出 陣 列 狀 態 ， 發 生 交 換 才 計 次 ， 最 後 加 總 。",
    "category": "python",
    "question_img": "圖片/python/q274_question.png"
  },
  {
    "id": 275,
    "set": 4,
    "original_num": 25,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "10",
      "B": "30",
      "C": "5",
      "D": "15"
    },
    "answer": "C",
    "option_exps": {
      "C": "迴 圈 在  c=5 中 斷 ， print(c) 印 出  5 ， 對 應  (C) 。",
      "A": "10 、 (B)30 、 (D)15 都 不 是 迴 圈 中 斷 時 的  c 值 。"
    },
    "explanation": "• fun(10,15) ： range(10,2,-1) 由 大 到 小 取  10,9,…,3 ， 找 第 一 個 同 時 整 除  10 與  15\n的 數 就  break 。\n• 10%c==0 且  15%c==0 ： 只 有  c=5 成 立 （ 10 、 15 皆 可 整 除 ） 。\n• 解 題 技 巧 ： 這 其 實 是 在 找  10 與  15 的 最 大 公 因 數 ＝ 5 。",
    "category": "python",
    "question_img": "圖片/python/q275_question.png"
  },
  {
    "id": 276,
    "set": 4,
    "original_num": 26,
    "question": "定 義 下 面 的 函 數 ， 請 問 執 行  func1(16, 30) ， 其 回 傳 值 為 何 ？",
    "options": {
      "A": "5",
      "B": "7",
      "C": "6",
      "D": "4"
    },
    "answer": "C",
    "option_exps": {
      "C": "正 確 回 傳 值 是  2 ， 即  GCD(16,30)=2 。"
    },
    "explanation": "⚠  此 題 題 庫 答 案 有 誤\n題 庫 答 案 ： C （ 6 ）\n正 確 結 果 ： 2 — GCD(16,30)=2 ， 且  2 不 在 任 何 選 項 中\n• func1 是 輾 轉 相 除 法 求 最 大 公 因 數 ： b>a 先 交 換 ， 再 反 覆  r=a%b 、 a,b=b,r 直\n到  b=0 。\n• func1(16,30) ： 交 換 成  (30,16) →  餘  14 →  餘  2 →  餘  0 ， 回 傳  2 。\n✗但  2 並 不 在 四 個 選 項 中 ； 題 庫 標 示 答 案 為  (C) 6 ， 與 實 際 不 符 。\n• 解 題 技 巧 ： 看 到  r=a%b 、 a,b=b,r 就 是 在 求 最 大 公 因 數  (GCD) 。",
    "category": "python",
    "question_img": "圖片/python/q276_question.png"
  },
  {
    "id": 277,
    "set": 4,
    "original_num": 27,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "26",
      "B": "20",
      "C": "24",
      "D": "25"
    },
    "answer": "C",
    "option_exps": {
      "C": "最 終  print(sum) 印 出  24 ， 對 應  (C) 。",
      "A": "10 、 (B)30 、 (D)25 都 不 是  3+5+7+9 的 正 確 總 和 。"
    },
    "explanation": "• sum 起 始  0 ， x 起 始  3 ； while x<10 每 輪  sum+=x 、 x+=2 （ x 走  3,5,7,9 ） 。\n• sum 累 加 ： 3 → 8 → 15 → 24 ； x=11 時 跳 出 迴 圈 。\n• 解 題 技 巧 ： x 每 次 加  2 ， 只 會 取 奇 數  3,5,7,9 ， 相 加 即  24 。",
    "category": "python",
    "question_img": "圖片/python/q277_question.png"
  },
  {
    "id": 278,
    "set": 4,
    "original_num": 28,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "11",
      "B": "9",
      "C": "10",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "print(x) 在 迴 圈 結 束 後 印 出 最 後 的  x ＝ 10 ， 對 應  (C) 。",
      "A": "11 多 加 一 輪 ； (B)9 看 錯 成  y ； (D) 以 上 皆 非  不 成 立 。"
    },
    "explanation": "• 外 層  while x<9 每 輪  x+=2 ； 內 層  while y<9 只 在 第 一 輪 把  y 加 到  9 ， 之 後 不\n再 進 入 。\n• x 變 化 ： 0 → 2 → 4 → 6 → 8 → 10 ， 當  x=10 不 再 小 於  9 而 跳 出 。\n• 解 題 技 巧 ： print 沒 縮 排 在 迴 圈 內 ， 印 的 是 離 開 迴 圈 後 的 最 終 值 。",
    "category": "python",
    "question_img": "圖片/python/q278_question.png"
  },
  {
    "id": 279,
    "set": 4,
    "original_num": 29,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "",
      "B": "",
      "C": "D",
      "D": ""
    },
    "answer": "C",
    "option_exps": {
      "C": "最 多 只 有  4 顆 星 （ 共  4 行 星 號 ） ， 且  x=1 那 輪 先 印 出 一 個 空 行  →  對 應  (C) 。"
    },
    "explanation": "• 內 層  range(1, x) 會 產 生  x-1 顆 星 ： x 從  1 到  5 ， 星 數 依 序 為  0 、 1 、 2 、 3 、 4 。\n✗ 會 印 到  5 顆 星 (*****) 的 選 項 是 把 內 層 當 成  range(1, x+1) →  排 除 。\n• 解 題 技 巧 ： range(1, x) 的 數 量 是  x-1 ， 不 是  x ； 注 意  x=1 時 內 層 為 空 。",
    "category": "python",
    "question_img": "圖片/python/q279_question.png",
    "options_are_images": true
  },
  {
    "id": 280,
    "set": 4,
    "original_num": 30,
    "question": "若 有  16 筆 已 經 排 序 的 資 料 ， 使 用 『 循 序 搜 尋 法 』 欲 搜 尋 某 個 數 字 ， 最 差 情 況 要 搜 尋 幾 次 ？",
    "options": {
      "A": "5",
      "B": "16",
      "C": "4",
      "D": "以 上 皆 非"
    },
    "answer": "B",
    "option_exps": {
      "B": "16 筆 資 料 最 差 需 搜 尋  16 次 ， 對 應  (B) 。",
      "A": "5 、 (C)4 是 二 分 搜 尋  log2(16) 那 類 的 次 數 ， 非 循 序 搜 尋 。"
    },
    "explanation": "• 循 序 搜 尋 （ 線 性 搜 尋 ） 從 第 一 筆 逐 一 往 後 比 對 ， 與 資 料 是 否 排 序 無 關 。\n• 最 差 情 況 是 目 標 在 最 後 一 筆 或 不 存 在 ， 必 須 比 對 完 全 部 資 料 。\n• 解 題 技 巧 ： 循 序 搜 尋 最 差 次 數 ＝ 資 料 筆 數  n ； 二 分 搜 尋 才 是  log2(n) 。",
    "category": "python",
    "question_img": "圖片/python/q280_question.png"
  },
  {
    "id": 281,
    "set": 4,
    "original_num": 31,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "124578",
      "B": "12",
      "C": "123456789",
      "D": "123"
    },
    "answer": "A",
    "option_exps": {
      "A": "end=\"\" 讓 數 字 相 連 ， 輸 出 「 124578 」 ， 對 應  (A) 。",
      "C": "123456789 沒 跳 過  3 、 6 ； (B)12 、 (D)123 印 太 少 。"
    },
    "explanation": "• for x in range(1,9) 取  1~8 ； x%3==0 時  continue 跳 過 該 次 的  print 。\n• 被 跳 過 的 是  3 與  6 ， 其 餘  1,2,4,5,7,8 都 會 印 出 。\n• 解 題 技 巧 ： continue 只 跳 過 本 輪 ， 仍 會 繼 續 下 一 個  x 。",
    "category": "python",
    "question_img": "圖片/python/q281_question.png"
  },
  {
    "id": 282,
    "set": 4,
    "original_num": 32,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "0",
      "B": "False",
      "C": "True",
      "D": "1"
    },
    "answer": "C",
    "option_exps": {
      "C": "函 式 回 傳  True ， print 印 出  (C) True 。",
      "B": "False 是 三 條 件 全 不 成 立 才 會 出 現 。",
      "A": "0 、 (D)1 函 式 回 傳 的 是 布 林 值 ， 不 會 是 數 字 。"
    },
    "explanation": "• test_number5(7,2) ： 三 個 條 件 用  or 連 接 ， 任 一 成 立 即 回 傳  True 。\n• x==y 不 成 立 、 (x+y)==5 不 成 立 ， 但  abs(7-2)==5 成 立 。",
    "category": "python",
    "question_img": "圖片/python/q282_question.png"
  },
  {
    "id": 283,
    "set": 4,
    "original_num": 33,
    "question": "你 正 在 為 一 個 公 車 公 司 編 寫  Python 應 用 程 式 ， 公 司 希 望 鼓 勵 學 生 和 上 班 族 儘 量 搭 大 眾 運 輸 交 通 工 具 ， 學 生 和 上 班 族 將 會 獲\n得  35% 的 折 扣 ， 你 編 寫 以 下 程 式 碼 ， 其 中 包 含 的 行 號 只 是 做 為 參 考 ， 你 必 須 完 成 這 個 程 式 碼 ， 在  03 行 中 你 將 加 入 什 麼 程 式\n碼 ？",
    "options": {
      "A": "if (not Student) and office_worker:",
      "B": "if not (Student or office_worker):",
      "C": "if not (Student and office_worker):",
      "D": "if (not Student) or office_worker:"
    },
    "answer": "B",
    "option_exps": {
      "B": "(B) if not (Student or office_worker): 正 好 表 示 「 兩 者 都 不 是 」 →  設 為  0 。",
      "C": "not(... and ...) 只 要 有 一 個 身 分 就 誤 判 為 非 折 扣 。",
      "A": "(D) 用  office_worker 直 接 判 斷 ， 邏 輯 與 「 兩 者 皆 非 」 不 符 。"
    },
    "explanation": "• 需 求 ： 學 生 或 上 班 族 才 享 折 扣 ； 兩 者 皆 非 的 人 折 扣 應 為  0 。\n• 03 行 要 在 「 不 是 學 生 且 不 是 上 班 族 」 時 ， 讓  discount 改 為  0 。",
    "category": "python",
    "question_img": "圖片/python/q283_question.png"
  },
  {
    "id": 284,
    "set": 4,
    "original_num": 34,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "20",
      "B": "30",
      "C": "10",
      "D": "輸 入 必 需 為 數 字"
    },
    "answer": "B",
    "option_exps": {
      "B": "直 接 執 行  return a+b ＝ 10+20 ＝ 30 ， 印 出  (B) 30 。",
      "A": "20 、 (C)10 都 不 是 兩 數 相 加 的 結 果 。",
      "D": "兩 者 皆 為 數 字 ， 不 會 觸 發 例 外 訊 息 。"
    },
    "explanation": "• add_numbers 先 檢 查  a 、 b 是 否 都 是  int ； 不 是 才  raise TypeError 。\n• 呼 叫  add_numbers(10,20) ： 10 與  20 都 是 整 數 ， 通 過 檢 查 。",
    "category": "python",
    "question_img": "圖片/python/q284_question.png"
  },
  {
    "id": 285,
    "set": 4,
    "original_num": 35,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "3",
      "B": "11",
      "C": "8",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "print 印 出 較 大 的  8 ， 對 應  (C) 。",
      "A": "3 是 較 小 值 ； (B)11 是  3+8 的 和 。"
    },
    "explanation": "• 函 式  m(n1,n2) ： n1>n2 回 傳  n1 ， 否 則 回 傳  n2 ， 等 於 取 較 大 值 。\n• m(3,8) ： 3>8 不 成 立  →  走  else 回 傳  n2 ＝ 8 。\n• 解 題 技 巧 ： 這 是 典 型 的 取 最 大 值 函 式 ， 直 接 挑 兩 數 中 較 大 者 。",
    "category": "python",
    "question_img": "圖片/python/q285_question.png"
  },
  {
    "id": 286,
    "set": 4,
    "original_num": 36,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "120",
      "B": "5",
      "C": "1",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "整 串 遞 迴 最 終 結 果 為  1 ， 對 應  (C) 。",
      "A": "120 是 把 它 當 成 階 乘 相 乘 才 會 有 ； 本 函 式 沒 有 乘 法 。",
      "B": "5 是 起 始  n ， 非 回 傳 值 ； (D) 不 成 立 。"
    },
    "explanation": "• fun(n) ： n==1 回 傳  1 ， 否 則 回 傳  fun(n-1) ， 會 一 路 遞 迴 到  n=1 。\n• fun(5) → fun(4) → fun(3) → fun(2) → fun(1) ， 最 後  fun(1) 回 傳  1 ， 逐 層 回 傳 上\n去 。",
    "category": "python",
    "question_img": "圖片/python/q286_question.png"
  },
  {
    "id": 287,
    "set": 4,
    "original_num": 37,
    "question": "下 面 是 循 序 搜 尋 法 的 函 數 內 容 ， 假 設 執 行  SeqSearch([5, 3, 1, 4, 6, 2], 4) ， 請 問 回 傳 何 值 ？",
    "options": {
      "A": "4",
      "B": "-1",
      "C": "3",
      "D": "0"
    },
    "answer": "C",
    "option_exps": {
      "C": "a[3]==4 成 立 ， 立 即  return i ， 即  return 3 ， 對 應  (C) 。",
      "A": "4 是 要 找 的 「 值 」 不 是 索 引  →  混 淆 值 與 位 置 。",
      "B": "-1 是 「 找 不 到 」 才 回 傳 ， 但  4 確 實 存 在  →  排 除 。",
      "D": "0 是  5 的 位 置 ， 不 是  4 →  排 除 。"
    },
    "explanation": "• 循 序 搜 尋 從 頭 逐 一 比 對 ， 找 到 目 標 就 回 傳 該 索 引  i ， 找 不 到 才 回 傳  -1 。\n• a=[5,3,1,4,6,2] ， 要 找  4 ： i=0 是  5 、 i=1 是  3 、 i=2 是  1 、 i=3 才 是  4 。",
    "category": "python",
    "question_img": "圖片/python/q287_question.png"
  },
  {
    "id": 288,
    "set": 4,
    "original_num": 38,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "[6, 5, 4, 3, 2, 1]",
      "B": "[3, 1, 2, 5, 4, 6]",
      "C": "[1, 2, 3, 4, 5, 6]",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "[3,1,2,5,4,6] 排 序 後 得  [1,2,3,4,5,6] ， 對 應  (C) 。",
      "A": "[6,5,4,3,2,1] 是 遞 減 ， 與 此 比 較 方 向 相 反  →  排 除 。",
      "B": "[3,1,2,5,4,6] 是 原 始 串 列 、 尚 未 排 序  →  排 除 。",
      "D": "既 然  (C) 正 確 ， 「 以 上 皆 非 」 不 成 立 。"
    },
    "explanation": "• 雙 層 迴 圈 ： i 、 j 各 掃 過 整 個 串 列 ， 只 要  list[j] > list[i] 就 交 換 兩 者 。\n• 這 等 同 一 種 選 擇 排 序 ， 反 覆 把 較 小 值 往 前 擺 ， 最 終 完 成 「 由 小 到 大 」 排 序 。",
    "category": "python",
    "question_img": "圖片/python/q288_question.png"
  },
  {
    "id": 289,
    "set": 4,
    "original_num": 39,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "8",
      "B": "3",
      "C": "9",
      "D": "124578"
    },
    "answer": "A",
    "option_exps": {
      "A": "迴 圈 跑 完 最 後 一 個  x 值 為  8 ， 離 開 迴 圈 印 出  x ， 即 印  8 ， 對 應  (A) 。",
      "C": "9 不 在  range(1,9) 內 （ 取 不 到  9 ） →  排 除 。",
      "D": "124578 是 把  print 放 進 迴 圈 才 會 逐 一 印 出  →  縮 排 不 符 。"
    },
    "explanation": "• 迴 圈  x 從  1 到  8 ； x%3==0 （ 即  3 、 6 ） 時  continue 跳 過 該 次 。\n• 但  print 在 迴 圈 外 （ 縮 排 對 齊  for ） ， 迴 圈 結 束 後 只 執 行 一 次 。\n• 解 題 技 巧 ： 先 看  print 縮 排 在 迴 圈 內 或 外 ， 決 定 印 一 次 還 是 多 次 。",
    "category": "python",
    "question_img": "圖片/python/q289_question.png"
  },
  {
    "id": 290,
    "set": 4,
    "original_num": 40,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "120",
      "B": "1",
      "C": "24",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "s(5) 算 出  5! = 120 ， print(p) 印 出  120 ， 對 應  (A) 。",
      "B": "1 是  p 的 初 值 ， 迴 圈 會 把 它 乘 大  →  排 除 。",
      "C": "24 是  4! ， 少 乘 了 一 個  5 →  排 除 。"
    },
    "explanation": "• s(n) 用  p 從  1 開 始 連 乘 ， range(n,0,-1) 由  n 遞 減 到  1 ， 等 於  n 階 乘 。\n• n=5 ： p=1×5×4×3×2×1=120 。\n• 解 題 技 巧 ： range(n,0,-1) 含  n 不 含  0 ， 正 好 乘 到  1 ， 即  n! 。",
    "category": "python",
    "question_img": "圖片/python/q290_question.png"
  },
  {
    "id": 291,
    "set": 4,
    "original_num": 41,
    "question": "利 用 氣 泡 排 序 法 ， 欲 將  10 筆 資 料 由 小 到 大 排 序 ， 最 多 需 要 交 換 幾 次 ？",
    "options": {
      "A": "50",
      "B": "90",
      "C": "45",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "n=10 ： 10×9/2 = 45 ， 最 多 交 換  45 次 ， 對 應  (C) 。",
      "A": "50 與 任 何 公 式 都 不 符  →  排 除 。",
      "B": "90 是  n(n-1)=10×9 ， 漏 除 以  2 →  排 除 。"
    },
    "explanation": "• 氣 泡 排 序  n 筆 資 料 ， 比 較 次 數 固 定 為  n(n-1)/2 ， 但 「 交 換 」 次 數 視 資 料 而 定 。\n• 最 壞 情 況 （ 完 全 逆 序 ） 每 次 比 較 都 要 交 換 ， 達 到 上 限  n(n-1)/2 。\n• 解 題 技 巧 ： 氣 泡 排 序 最 多 交 換  = 比 較 次 數  = n(n-1)/2 。",
    "category": "python"
  },
  {
    "id": 292,
    "set": 4,
    "original_num": 42,
    "question": "下 面 是 氣 泡 排 序 法 的 主 要 程 式 片 段 ， 假 設  a=[3, 2, 6, 4] ， 請 問 執 行 後 ， 第  04 列 的 資 料 交 換 會 執 行 幾\n次 ？",
    "options": {
      "A": "4",
      "B": "3",
      "C": "5",
      "D": "2"
    },
    "answer": "D",
    "option_exps": {
      "D": "全 程 只 交 換  2 次 ， 第  04 列 執 行  2 次 ， 對 應  (D) 。",
      "A": "(B)(C) 4 、 3 、 5 次 都 高 估 了 交 換 次 數  →  排 除 。"
    },
    "explanation": "• a=[3,2,6,4] ， 外 層  i=0..2 ， 內 層 比 較 相 鄰 兩 數 ， a[j]>a[j+1] 才 交 換 。\n• i=0 ： 3>2 換 → [2,3,6,4] ； 3>6 否 ； 6>4 換 → [2,3,4,6] （ 2 次 ） 。\n• i=1 ： 2>3 否 ； 3>4 否 （ 0 次 ） 。 i=2 ： 2>3 否 （ 0 次 ） 。\n• 解 題 技 巧 ： 實 際 交 換 次 數 要 逐 輪 模 擬 ， 不 等 於 比 較 次 數 。",
    "category": "python",
    "question_img": "圖片/python/q292_question.png"
  },
  {
    "id": 293,
    "set": 4,
    "original_num": 43,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "3",
      "B": "12",
      "C": "8",
      "D": "2"
    },
    "answer": "A",
    "option_exps": {
      "A": "x=3 時  break ， 離 開 迴 圈 時  x 仍 為  3 ， 印 出  3 ， 對 應  (A) 。",
      "B": "12 是 把  1 、 2 連 印 （ print 在 迴 圈 內 ） 的 結 果  →  縮 排 不 符 。",
      "C": "(D) 8 、 2 都 不 是 觸 發  break 的 那 個  x 值  →  排 除 。"
    },
    "explanation": "• 迴 圈  x 從  1 到  8 ； x%3==0 （ x=3 ） 時  break 直 接 跳 出 迴 圈 。\n• print 在 迴 圈 外 ， 迴 圈 中 斷 後 執 行 一 次 ， 印 出 當 下 的  x 。\n• 解 題 技 巧 ： break 後 變 數 停 在 中 斷 時 的 值 ， 配 合  print 縮 排 判 斷 。",
    "category": "python",
    "question_img": "圖片/python/q293_question.png"
  },
  {
    "id": 294,
    "set": 4,
    "original_num": 44,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "",
      "B": "",
      "C": "D",
      "D": ""
    },
    "answer": "C",
    "option_exps": {
      "C": "輸 出 為 左 對 齊 、 最 大  5 顆 星 的  5 列 三 角 形 ， 對 應  (C) 。",
      "A": "(D) 只 有  4 列 （ 最 多  4 顆 星 ） →  漏 掉  x=5 那 列  →  排 除 。",
      "B": "雖 也  5 列 ， 但 與 正 解 圖 的 排 列 不 符  →  排 除 。"
    },
    "explanation": "• 外 層  x 從  1 到  5 （ range(1,6) ） ， 內 層  range(0,x) 會 印 出  x 顆 星 ， 再 換 行 。\n• x=1 → * 、 x=2 → ** 、 x=3 → *** 、 x=4 → **** 、 x=5 → ***** ， 共  5 列 。\n• 解 題 技 巧 ： range(0,x) 的 數 量 等 於  x ， x 跑 到  5 共  5 列 。",
    "category": "python",
    "question_img": "圖片/python/q294_question.png",
    "options_are_images": true
  },
  {
    "id": 295,
    "set": 4,
    "original_num": 45,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "15",
      "B": "5",
      "C": "30",
      "D": "10"
    },
    "answer": "C",
    "option_exps": {
      "C": "c=30 時  c%10==0 且  c%15==0 成 立 ， break ， print(c) 印  30 ， 對 應  (C) 。",
      "A": "15 不 能 被  10 整 除  →  條 件 不 成 立  →  排 除 。",
      "B": "(D) 5 、 10 不 能 同 時 被  10 與  15 整 除  →  排 除 。"
    },
    "explanation": "• fun(10,15) ： c 從  10 到  a*b-1=149 ， 找 第 一 個 同 時 被  10 與  15 整 除 的 數 。\n• 同 時 整 除  10 和  15 ， 即  10 與  15 的 最 小 公 倍 數  30 。\n• 解 題 技 巧 ： 同 時 整 除 兩 數 的 最 小 值 就 是 兩 者 的 最 小 公 倍 數 。",
    "category": "python",
    "question_img": "圖片/python/q295_question.png"
  },
  {
    "id": 296,
    "set": 4,
    "original_num": 46,
    "question": "會 印 出 什 麼 結 果 ？",
    "options": {
      "A": "9",
      "B": "27",
      "C": "81",
      "D": "3"
    },
    "answer": "B",
    "option_exps": {
      "B": "return 27 ， print 印 出  27 ， 對 應  (B) 。",
      "A": "9 只 是 相 加 未 乘  3 →  漏 掉  if 成 立 的 加 乘  →  排 除 。",
      "C": "81 是 又 多 乘 一 次  3 →  排 除 。",
      "D": "3 只 是 單 一 輸 入 值 ， 與 運 算 無 關  →  排 除 。"
    },
    "explanation": "• sum_thrice 先 算  sum=x+y+z ； 若  x==y==z 三 者 相 等 ， 再 把  sum 乘 以  3 。\n• 傳 入  (3,3,3) ： sum=3+3+3=9 ， 且 三 數 相 等 ， 故  sum=9*3=27 。",
    "category": "python",
    "question_img": "圖片/python/q296_question.png"
  },
  {
    "id": 297,
    "set": 4,
    "original_num": 47,
    "question": "定 義 下 面 的 遞 迴 函 數 ， 請 問 執 行  num(8) 的 結 果 為 何 ？",
    "options": {
      "A": "55",
      "B": "45",
      "C": "28",
      "D": "36"
    },
    "answer": "D",
    "option_exps": {
      "D": "等 差 數 列 總 和  8×9/2 = 36 ， 對 應  (D) 。",
      "A": "55 是  1 加 到  10 →  n 算 成  10 →  排 除 。",
      "B": "45 是  1 加 到  9 →  多 算 一 項  →  排 除 。",
      "C": "28 是  1 加 到  7 →  少 算  n=8 →  排 除 。"
    },
    "explanation": "• num 是 遞 迴 ： n 為  0 或  1 回 傳  n ， 否 則 回 傳  n + num(n-1) ， 即  1 累 加 到  n 。\n• num(8) = 8+7+6+5+4+3+2+1 = 36 。",
    "category": "python",
    "question_img": "圖片/python/q297_question.png"
  },
  {
    "id": 298,
    "set": 4,
    "original_num": 48,
    "question": "兩 個 數 字 比 大 小 ， 再 依 需 要 交 換 位 置 ， 是 排 序 裡 重 要 的 工 作 ， 下 面 哪 一 個 指 令 可 以 做 資 料 交 換 的 工 作 ？",
    "options": {
      "A": "a, b=b, a",
      "B": "c=a; b=c; a=b",
      "C": "a=b; b=a",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "(A) a, b = b, a ： 右 邊 先 取 得 舊 的  (b,a) 再 同 時 指 派  →  正 確 互 換 。",
      "B": "c=a; b=c; a=b ： b 被 覆 寫 成  a 後  a 又 取 回 ， 兩 者 都 變 成 原  a →  失 敗 。",
      "C": "a=b; b=a ： a 先 被  b 覆 蓋 ， 原  a 已 遺 失 ， b 再 取 回 仍 是  b →  失 敗 。",
      "D": "既 然  (A) 正 確 ， 「 以 上 皆 非 」 不 成 立  →  排 除 。"
    },
    "explanation": "• Python 交 換 兩 變 數 要 靠 「 同 時 賦 值 」 ， 右 側 先 打 包 成 元 組 再 一 次 拆 解 給 左 側 。\n• 解 題 技 巧 ： 少 了 暫 存 變 數 的 單 向 連 續 賦 值 都 會 覆 蓋 掉 原 值 ， 無 法 交 換 。",
    "category": "python"
  },
  {
    "id": 299,
    "set": 4,
    "original_num": 49,
    "question": "請 寫 出 底 下 程 式 碼 的 執 行 結 果 ：",
    "options": {
      "A": "8",
      "B": "13",
      "C": "5",
      "D": "以 上 皆 非"
    },
    "answer": "A",
    "option_exps": {
      "A": "fib(6)=fib(5)+fib(4)=5+3=8 ， 對 應  (A) 。",
      "B": "13 是  fib(7) 的 值 ， 多 算 一 層 。",
      "C": "5 是  fib(5) ， 少 算 一 層 。"
    },
    "explanation": "• 這 是 費 氏 數 列 的 遞 迴 ： n<=2 回 傳  1 ， 否 則 回 傳  fib(n-1)+fib(n-2) 。\n• 依 序 算 ： fib(1)=1 、 fib(2)=1 、 fib(3)=2 、 fib(4)=3 、 fib(5)=5 、 fib(6)=8 。\n• 解 題 技 巧 ： base case 是  n<=2 回 傳  1 ， 所 以 前 兩 項 都 是  1 ， 再 往 上 累 加 。",
    "category": "python",
    "question_img": "圖片/python/q299_question.png"
  },
  {
    "id": 300,
    "set": 4,
    "original_num": 50,
    "question": "試 問 下 列 程 式 碼 中 ， 輸 出 結 果 為 ？",
    "options": {
      "A": "9",
      "B": "11",
      "C": "10",
      "D": "以 上 皆 非"
    },
    "answer": "C",
    "option_exps": {
      "C": "之 後 外 層 雖 讓  x 變  4 、 6 、 8 、 10 ， 但  y 已 是  10>9 ， 內 層 不 再 執 行 ， 最 後  print(y) 得",
      "A": "9 並 非  2 的 累 加 會 到 的 值 （ y 從  0 每 次 加  2 ， 只 會 是 偶 數 ） 。",
      "B": "11 同 理 是 奇 數 ， y 不 可 能 等 於  11 。"
    },
    "explanation": "• x=y=0 ； 外 層  while x<9 每 輪 先 做  x=x+2 。\n• 第 一 輪  x=2 ， 進 內 層  while y<9 ： y 依 序  2 、 4 、 6 、 8 、 10 ， 到  10 時 跳 出 。\n10 ， 對 應  (C) 。\n• 解 題 技 巧 ： 注 意 內 層 只 會 在 第 一 輪  x=2 時 真 正 跑 ， y 以 步 長  2 累 加 到 剛 超 過  9 即  10 。",
    "category": "python",
    "question_img": "圖片/python/q300_question.png"
  }
];
