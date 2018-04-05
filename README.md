<h1>
 verywang-react-tabs
</h1>
<h2>
安装
</h2>
<div class="highlight highlight-source-js">
<pre>
<span class="pl-smi">
 npm install verywang-react-tabs --save
</span>
</pre>
</div>
<h2>
 使用方法
</h2>
<div class="highlight highlight-source-js">
<pre>
<span class="pl-k">import</span>{ <span class="pl-smi">Tabs</span>,<span class="pl-smi">Tabs</span> }<span class="pl-k">from</span><span class="pl-s"><span class="pl-pds">'</span>verywang-react-tabs<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span><span class="pl-k">from</span><span class="pl-s"><span class="pl-pds">'</span>verywang-react-tabs/style/index.css<span class="pl-pds">'</span></span>;
<span class="pl-smi">React</span>.<span class="pl-en">render</span>(
  (
    <span class="pl-k">&lt;</span>Tabs
      active<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>
      barClick<span class="pl-k">=</span>{callback}
    <span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>TabPane label<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'</span>tab 1<span class="pl-pds">'</span></span> <span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>first<span class="pl-k">&lt;</span><span class="pl-k">/</span>TabPane<span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>TabPane label<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'</span>tab 2<span class="pl-pds">'</span></span> <span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>second<span class="pl-k">&lt;</span><span class="pl-k">/</span>TabPane<span class="pl-k">&gt;</span>
      <span class="pl-k">&lt;</span>TabPane label<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">'</span>tab 3<span class="pl-pds">'</span></span> <span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>third<span class="pl-k">&lt;</span><span class="pl-k">/</span>TabPane<span class="pl-k">&gt;</span>
    <span class="pl-k">&lt;</span><span class="pl-k">/</span>Tabs<span class="pl-k">&gt;</span>
  ),
  <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>t2<span class="pl-pds">'</span></span>));
</pre>
</div>
<h2>
 API
</h2>
<h3>Tabs</h3>
<h4>props</h4>
<table>
<thead>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>默认</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr><td>type</td><td>string</td><td>full</td><td>tab的布局方式目前只提供全屏</td></tr>
    <tr><td>active</td><td>number</td><td>0</td><td>当前选中的bar</td></tr>
    <tr><td>barClick</td><td>func</td><td>func</td><td>bar选中回调函数</td></tr>
    <tr><td>transitionType</td><td>string</td><td>fade</td><td>content过渡方式(注:请与对应组件搭配)</td></tr>
    <tr><td>barType</td><td>string</td><td>traverse</td><td>bar点击过渡方式</td></tr>
    <tr><td>barBorder</td><td>string</td><td>int</td><td>bar边框样式</td></tr>
    <tr><td>barPosition</td><td>string</td><td>bottom</td><td>bar位置</td></tr>
    </tbody>
</table>
<h3>TabFade||TabPan||TabTraverse</h3>
<h4>props</h4>
<table>
<thead>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>默认</th>
        <th>描述</th>
    </tr>
    </thead>
    <tbody>
    <tr><td>label</td><td>string||node</td><td>""</td><td>对应bar标题</td></tr>
    <tr><td>activeLabel</td><td>string||node</td><td>""</td><td>选中时对应bar标题</td></tr>
    </tbody>
</table>