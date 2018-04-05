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
<span class="pl-k">import</span>
{ <span class="pl-smi">Tabs</span>,<span class="pl-smi">Tabs</span> }
<span class="pl-k">from</span>
<span class="pl-s"><span class="pl-pds">'</span>verywang-react-tabs<span class="pl-pds">'</span></span>;
<span class="pl-k">import</span>
<span class="pl-k">from</span>
<span class="pl-s"><span class="pl-pds">'</span>verywang-react-tabs/style/index.css<span class="pl-pds">'</span></span>;
<span class="pl-smi">React</span>.<span class="pl-en">render</span>(
  (
    <span class="pl-k">&lt;</span>Tabs
      active<span class="pl-k">=</span><span class="pl-s">
      <span class="pl-pds">"</span>2<span class="pl-pds">"</span></span>
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

react tab组件
使用方法后续更新