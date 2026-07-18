export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="monogram" href="#top" aria-label="返回首页">Y.</a>
        <div className="nav-links">
          <a href="#research">研究</a>
          <a href="#opensource">开源</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </div>
        <span className="availability"><i /> 现可合作</span>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">求职方向：AI 应用开发 · 研究者 · 开源开发者</p>
        <aside className="profile-card" aria-label="Junyi Zheng 形象照">
          <div className="profile-corners" aria-hidden="true" />
          <img src="/profile.png" alt="Junyi Zheng 形象照" />
          <div className="profile-label"><span>PROFILE_01</span><span>RESEARCH · AI</span></div>
        </aside>
        <h1>研究复杂系统，<br /><em>构建实用工具。</em></h1>
        <div className="hero-bottom">
          <p>我是 Junyi Zheng，专注于非线性动力学研究与 AI 应用开发。用扎实的建模能力与工程实践，把复杂问题转化为清晰、可靠的方案。</p>
          <a className="round-link" href="#research" aria-label="浏览研究成果"><span>向下</span>↓</a>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="section-heading">
          <p className="eyebrow">研究成果</p>
          <p className="count">SCI Q1 · 中科院一区 TOP</p>
        </div>
        <article className="paper-card">
          <div className="paper-visual">
            <img src="/paper-first-page.png" alt="论文 Hybrid forcing control of entrainment transitions 首页" />
            <p>论文首页 · Chaos, Solitons &amp; Fractals</p>
          </div>
          <div className="paper-copy">
            <p className="eyebrow">Chaos, Solitons &amp; Fractals · 2026</p>
            <h2>Hybrid forcing control of entrainment transitions</h2>
            <dl className="paper-details">
              <div><dt>发表期刊</dt><dd>Chaos, Solitons &amp; Fractals</dd></div>
              <div><dt>卷期信息</dt><dd>Vol. 210, Article 118699</dd></div>
              <div><dt>作者</dt><dd>Junyi Zheng, Changgui Gu, Jiangsheng Wang, Guolin Wu</dd></div>
              <div><dt>作者单位</dt><dd>上海理工大学管理学院系统科学系；同济大学物理科学与工程学院、先进微结构材料教育部重点实验室；桂林航天工业学院理学院</dd></div>
              <div><dt>项目支持</dt><dd>国家自然科学基金项目支持</dd></div>
            </dl>
            <p className="paper-summary">研究混合强迫如何调控耦合振子群体中的锁频转变。工作结合理论分析与数值模拟，揭示相关性参数对连续与突变式 entrainment 转变的影响。</p>
            <div className="paper-tags"><span>非线性动力学</span><span>复杂系统</span><span>同步与锁频</span></div>
            <a className="text-link" href="https://doi.org/10.1016/j.chaos.2026.118699" target="_blank" rel="noreferrer">查看论文 DOI <b>↗</b></a>
          </div>
        </article>
      </section>

      <section id="opensource" className="work-section">
        <div className="section-heading">
          <p className="eyebrow">开源实践</p>
          <a className="count github-link" href="https://github.com/zjyHeart" target="_blank" rel="noreferrer">GitHub / zjyHeart ↗</a>
        </div>
        <div className="project-grid code-grid">
          <article className="project code-card knowledge-card">
            <div className="project-image"><img className="cover-art" src="/knowledge-graph-cover.png" alt="由笔记节点与链接组成的知识图谱视觉" /></div>
            <div className="project-meta"><div><h2>obsidian-knowledgeize</h2><p>Codex Skill · 知识管理</p></div></div>
            <p className="code-description">将普通 Markdown 转换为 Obsidian 知识库笔记：以标题优先检索为策略，补充 frontmatter、标签、双向链接与导航结构，并控制上下文消耗。</p>
            <a className="text-link" href="https://github.com/zjyHeart/obsidian-knowledgeize" target="_blank" rel="noreferrer">查看仓库 <b>↗</b></a>
          </article>
          <article className="project code-card etl-card">
            <div className="project-image"><img className="cover-art" src="/chat-etl-cover.png" alt="聊天信息经过多阶段处理后形成结构化数据的视觉" /></div>
            <div className="project-meta"><div><h2>chat_history_etl</h2><p>Java · Spring AI</p></div></div>
            <p className="code-description">面向用户自愿导入聊天记录的轻量 ETL 组件。支持 UTF-8 TXT、CSV、JSON 的提取、标准化、转换、切分与向量库加载，并明确数据隐私边界。</p>
            <a className="text-link" href="https://github.com/zjyHeart/chat_history_etl" target="_blank" rel="noreferrer">查看仓库 <b>↗</b></a>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <p className="eyebrow">关于我</p>
        <div>
          <h2>用研究能力理解问题，用工程能力<strong>交付结果。</strong></h2>
          <p>我关注复杂系统中的集体动力学，也持续将 AI 与知识管理能力沉淀为可复用的开源工具。期待在研究、算法、AI 应用或软件工程场景中创造实际价值。</p>
          <div className="services"><span>复杂系统建模</span><span>非线性动力学</span><span>AI 应用开发</span><span>知识工程</span></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">期待交流机会</p>
        <a href="mailto:zheng_jun_yi@163.com">zheng_jun_yi@163.com<span>↗</span></a>
        <div className="footer-line"><span>© 2026 JUNYI ZHENG</span><span>AI 应用开发 / 研究 / 开源</span><a href="https://github.com/zjyHeart" target="_blank" rel="noreferrer">GitHub</a></div>
      </section>
    </main>
  );
}
