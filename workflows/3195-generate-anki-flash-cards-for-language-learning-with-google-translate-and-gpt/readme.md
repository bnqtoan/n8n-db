**中文学习卡片自动化生成系统**

**使用案例**  
1. **语言学习辅助**：用户输入中文词汇后，系统自动生成拼音及例句，帮助学习者掌握发音和用法。  
2. **教学资源整合**：教师批量生成词汇卡片，结合图片与例句，快速创建教学材料。  
3. **个人知识管理**：整理生词库时，自动关联视觉化素材，提升复习效率。

**如何运作**  
1. **触发与输入**：用户在Google表格的`initialText`列输入中文词汇（如“仓库”），触发n8n流程。  
2. **翻译与拼音生成**：  
   - **Google Translate节点**：将词汇翻译为中文（保留原词，用于后续处理）。  
   - **AI Agent节点**（OpenAI GPT模型）：生成拼音（如“Cāngkù”）及例句（如“卡车抵达仓库”）。  
3. **图片获取**：  
   - **Pexels API节点**：根据词汇（如“仓库”）调用Pexels API，获取相关图片链接。  
   - **Google Drive节点**：将图片上传至指定文件夹，生成可访问的URL。  
4. **数据整合**：  
   - **Merge节点**：将拼音、例句、图片链接合并，回填至Google表格对应列。  

**服务与工具**  
- **Google Sheets**：作为数据输入与存储。  
- **Google Translate API**：词汇翻译。  
- **OpenAI GPT-4**：生成拼音与例句。  
- **Pexels API**：获取免费图片。  
- **Google Drive**：存储图片资源。  

**问题与优化建议**  
- **当前问题**：  
  - Pexels API节点未正确配置API密钥（需替换`<PEXELS_API_KEY>`）。  
  - Google Drive上传路径未指定（需填写具体文件夹ID）。  
- **解决方案**：  
  1. 在Pexels节点中替换为有效API密钥（注册Pexels开发者账号获取）。  
  2. 在Google Drive节点中明确目标文件夹的ID或URL。  
  3. 检查各节点间的字段映射（如确保`initialText`正确传递至Pexels查询参数）。  

**示例配置片段**  
```json
"Call API Pexels节点": {
  "parameters": {
    "url": "https://api.pexels.com/v1/search",
    "headers": {
      "Authorization": "替换为你的Pexels API密钥"
    },
    "query": {
      "query": "{{ $('Trigger节点').item.json.initialText }}"
    }
  }
}
```

**标签**  
#n8n自动化 #语言学习工具 #GoogleSheet整合 #AI辅助学习 #工作流优化