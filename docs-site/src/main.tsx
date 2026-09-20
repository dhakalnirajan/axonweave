import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-powershell';
import { FiMenu, FiMoon, FiSun, FiSearch, FiX, FiChevronRight, FiThumbsUp, FiThumbsDown, FiChevronDown, FiZap, FiGithub } from 'react-icons/fi';
import './global.css';
import './docs.css';
import './playground.css';
import './json-render/json-render.css';

import indexMd from '../content/index.md?raw';
import gettingStartedMd from '../content/getting-started.md?raw';
import architectureMd from '../content/architecture.md?raw';
import backendsMd from '../content/backends.md?raw';
import biologyMd from '../content/biology.md?raw';
import interoperabilityMd from '../content/interoperability.md?raw';
import distributionMd from '../content/distribution.md?raw';
import scientificMd from '../content/scientific-reference.md?raw';
import releaseMd from '../content/release-engineering.md?raw';
import contributingMd from '../content/contributing.md?raw';
import apiMd from '../content/api-reference.md?raw';
import troubleshootingMd from '../content/troubleshooting.md?raw';
import configurationMd from '../content/configuration.md?raw';
import privacyMd from '../content/privacy.md?raw';
import termsMd from '../content/terms.md?raw';
import licenseMd from '../content/license.md?raw';
import codeOfConductMd from '../content/code-of-conduct.md?raw';
import securityMd from '../content/security.md?raw';
import examplesCustomPolicyMd from '../content/examples-custom-policy.md?raw';
import examplesPytorchCompositionMd from '../content/examples-pytorch-composition.md?raw';
import examplesSelectionMd from '../content/examples-selection.md?raw';
import frameworkMd from '../content/framework.md?raw';
import encodersMd from '../content/encoders.md?raw';
import dynamicsMd from '../content/dynamics.md?raw';
import learningMd from '../content/learning.md?raw';
import experimentMd from '../content/experiment.md?raw';
import installationMd from '../content/installation.md?raw';
import coreConceptsMd from '../content/core-concepts.md?raw';
import brainMd from '../content/brain.md?raw';
import connectomeMd from '../content/connectome.md?raw';
import signalsMd from '../content/signals.md?raw';
import tasksMd from '../content/tasks.md?raw';
import trainingMd from '../content/training.md?raw';
import checkpointsMd from '../content/checkpoints.md?raw';
import devicesMd from '../content/devices.md?raw';
import faqMd from '../content/faq.md?raw';
import limitationsMd from '../content/limitations.md?raw';
import errorsMd from '../content/errors.md?raw';
import tutorialLifMd from '../content/tutorial-lif.md?raw';
import tutorialConnectomeMd from '../content/tutorial-connectome.md?raw';
import readoutsMd from '../content/readouts.md?raw';
import rustCoreMd from '../content/rust-core.md?raw';
import runtimeMd from '../content/runtime.md?raw';
import playgroundMd from '../content/playground.md?raw';
import glossaryMd from '../content/glossary.md?raw';
import cliExamplesMd from '../content/cli-examples.md?raw';
import migrationGuideMd from '../content/migration-guide.md?raw';
import Playground from './components/playground/Playground';

type Page = { slug: string; label: string; source: string; section: string };
const pages: Page[] = [
 {slug:'index',label:'Overview',source:indexMd,section:'Overview'},
 {slug:'installation',label:'Installation',source:installationMd,section:'Getting Started'},
 {slug:'getting-started',label:'Getting Started',source:gettingStartedMd,section:'Getting Started'},
 {slug:'distribution',label:'Substrates',source:distributionMd,section:'Getting Started'},
 {slug:'core-concepts',label:'Core Concepts',source:coreConceptsMd,section:'Concepts'},
 {slug:'brain',label:'Biological Brain',source:brainMd,section:'Concepts'},
 {slug:'connectome',label:'Connectome',source:connectomeMd,section:'Concepts'},
 {slug:'dynamics',label:'Neuron Dynamics',source:dynamicsMd,section:'Concepts'},
 {slug:'runtime',label:'Temporal Runtime',source:runtimeMd,section:'Concepts'},
 {slug:'signals',label:'Signals & Receptors',source:signalsMd,section:'Concepts'},
 {slug:'encoders',label:'Encoders & Decoders',source:encodersMd,section:'Concepts'},
 {slug:'readouts',label:'Readouts',source:readoutsMd,section:'Concepts'},
 {slug:'tasks',label:'Tasks',source:tasksMd,section:'Concepts'},
 {slug:'training',label:'Training',source:trainingMd,section:'Guides'},
 {slug:'learning',label:'Learning & Plasticity',source:learningMd,section:'Guides'},
 {slug:'experiment',label:'Experiments & Agents',source:experimentMd,section:'Guides'},
 {slug:'checkpoints',label:'Checkpoints',source:checkpointsMd,section:'Guides'},
 {slug:'examples-pytorch-composition',label:'Custom Layer Composition',source:examplesPytorchCompositionMd,section:'Guides'},
 {slug:'examples-selection',label:'Selection & Sub-Networks',source:examplesSelectionMd,section:'Guides'},
 {slug:'tutorial-lif',label:'Tutorial: LIF Neurons',source:tutorialLifMd,section:'Guides'},
 {slug:'tutorial-connectome',label:'Tutorial: Connectomes',source:tutorialConnectomeMd,section:'Guides'},
 {slug:'examples-custom-policy',label:'Custom Signal Policy',source:examplesCustomPolicyMd,section:'Guides'},
 {slug:'framework',label:'Framework API',source:frameworkMd,section:'Reference'},
 {slug:'backends',label:'Backends',source:backendsMd,section:'Reference'},
 {slug:'devices',label:'Device Support',source:devicesMd,section:'Reference'},
 {slug:'configuration',label:'Configuration',source:configurationMd,section:'Reference'},
 {slug:'api-reference',label:'API Reference',source:apiMd,section:'Reference'},
 {slug:'biology',label:'Biological Model',source:biologyMd,section:'Science'},
 {slug:'scientific-reference',label:'Scientific Reference',source:scientificMd,section:'Science'},
 {slug:'limitations',label:'Scientific Limitations',source:limitationsMd,section:'Science'},
 {slug:'interoperability',label:'Interoperability',source:interoperabilityMd,section:'Science'},
{slug:'architecture',label:'Architecture',source:architectureMd,section:'Development'},
 {slug:'rust-core',label:'Rust Core',source:rustCoreMd,section:'Development'},
 {slug:'release-engineering',label:'Release Process',source:releaseMd,section:'Development'},
 {slug:'contributing',label:'Contributing',source:contributingMd,section:'Development'},
 {slug:'faq',label:'FAQ',source:faqMd,section:'Project'},
 {slug:'privacy',label:'Privacy Policy',source:privacyMd,section:'Project'},
 {slug:'terms',label:'Terms & Conditions',source:termsMd,section:'Project'},
 {slug:'license',label:'License',source:licenseMd,section:'Project'},
 {slug:'code-of-conduct',label:'Code of Conduct',source:codeOfConductMd,section:'Project'},
 {slug:'security',label:'Security Policy',source:securityMd,section:'Project'},
 {slug:'errors',label:'Errors & Diagnostics',source:errorsMd,section:'Reference'},
 {slug:'cli-examples',label:'CLI Examples',source:cliExamplesMd,section:'Reference'},
 {slug:'glossary',label:'Glossary',source:glossaryMd,section:'Reference'},
 {slug:'migration-guide',label:'Migration Guide',source:migrationGuideMd,section:'Development'},
 {slug:'troubleshooting',label:'Troubleshooting',source:troubleshootingMd,section:'Project'},
 {slug:'playground',label:'Playground',source:playgroundMd,section:'Tools'},
 ];

marked.setOptions({gfm:true, breaks:false});
// Admonitions: :::DOC-NOTE / :::DOC-WARN / :::DOC-TIP become accent-bar
// callout divs. The body is rendered as Markdown first (marked inside a
// block-level container), so inline code, emphasis, links and lists inside
// callouts format correctly instead of showing raw markdown characters.
const calloutBody = (body:string) => (marked.parse(body) as string).trim();
const normalize = (md:string) => md
 .replace(/^:::DOC-NOTE ?\n?([\s\S]*?)\n:::/gm, (_m, body:string) => `<div class="callout callout-note"><p class="callout-title">Note</p>\n${calloutBody(body)}\n</div>`)
 .replace(/^:::DOC-WARN ?\n?([\s\S]*?)\n:::/gm, (_m, body:string) => `<div class="callout callout-warn"><p class="callout-title">Constraint</p>\n${calloutBody(body)}\n</div>`)
 .replace(/^:::DOC-TIP ?\n?([\s\S]*?)\n:::/gm, (_m, body:string) => `<div class="callout callout-tip"><p class="callout-title">Tip</p>\n${calloutBody(body)}\n</div>`);
const render = (md:string) => DOMPurify.sanitize(marked.parse(normalize(md)) as string, {ADD_ATTR:['target','rel','class']});
// Documentation links are written relative to the content directory (e.g.
// `dynamics.md`); rewrite them to clean, extension-less SPA routes.
const rewriteDocLinks = (html:string) => html.replace(
  /href="([A-Za-z0-9_-]+)\.md(#[^"]*)?"/g,
  (_m, slug:string, hash:string) => `href="${BASE_PREFIX}/${slug}${hash ?? ''}"`,
);
const BASE = import.meta.env.BASE_URL;
const BASE_PREFIX = BASE.endsWith('/') ? BASE.slice(0,-1) : BASE;
const hrefFor = (slug:string) => `${BASE}${slug==='index'?'':slug}`;
const pathSlug = () => {
  const s = location.pathname.replace(BASE_PREFIX,'').replace(/^\//,'').replace(/\/$/,'');
  // Empty path always goes to index; never restore last state
  return s || 'index';
};

const VERSIONS = ['stable (0.2.0)','nightly'];

function CodeEnhancer({slug}:{slug:string}){
 useEffect(()=>{
   Prism.highlightAllUnder(document.querySelector('article') ?? document.body);
   const blocks=[...(document.querySelector('article') ?? document.body).querySelectorAll('pre')];
   blocks.forEach(pre=>{
     if(pre.querySelector('.code-topbar')) return;
     const codeEl=pre.querySelector('code');
     const lang=[...((codeEl?.className||'').match(/language-([\w-]+)/)||[])][1];
      const canCopy=lang==='python'||lang==='rust'||lang==='bash';

     // Create topbar with lang chip + copy button
     const topbar=document.createElement('div');
     topbar.className='code-topbar';
     if(lang && lang!=='text' && lang!=='none'){
       const chip=document.createElement('span');
       chip.className='lang-chip';
       chip.setAttribute('aria-hidden','true');
       chip.textContent=lang;
       topbar.appendChild(chip);
     }
     if(canCopy){
       const button=document.createElement('button');
       button.className='copy-button';
       button.setAttribute('aria-label','Copy code');
       button.innerHTML='<span class="copy-label">Copy</span>';
       button.onclick=async()=>{
         await navigator.clipboard.writeText(codeEl?.textContent||'');
         const label=button.querySelector('.copy-label');
         button.classList.add('copied');
         if(label)label.textContent='Copied!';
         setTimeout(()=>{button.classList.remove('copied');if(label)label.textContent='Copy'},1400);
       };
       topbar.appendChild(button);
     }

      // Line numbers for python/rust/bash blocks with 4+ lines
      let hasLines=false;
       if((lang==='python'||lang==='rust'||lang==='bash') && codeEl){
        const lineCount=(codeEl.textContent||'').replace(/\n$/,'').split('\n').length;
        if(lineCount>=4){
          hasLines=true;
          const lineNumbers=document.createElement('div');
          lineNumbers.className='line-numbers';
          lineNumbers.setAttribute('aria-hidden','true');
          let nums='';
          for(let i=1;i<=lineCount;i++) nums+=i+'\n';
          lineNumbers.textContent=nums;
          // Store reference so theme switch can re-render
          (pre as any).__lineNumbers = lineNumbers;
          (pre as any).__lineCount = lineCount;
        }
      }

      // Wrap in container
      const wrap=document.createElement('div');
      wrap.className='codeblock'+(hasLines?' has-lines':'');
      pre.replaceWith(wrap);
      if(topbar.children.length>0) wrap.appendChild(topbar);
      if(hasLines && (pre as any).__lineNumbers) wrap.appendChild((pre as any).__lineNumbers);
      wrap.appendChild(pre);

     // Scroll hint
     const hint=document.createElement('span');
     hint.className='scroll-hint';
     hint.setAttribute('aria-hidden','true');
     hint.textContent='scroll';
     wrap.appendChild(hint);
     const update=()=>hint.classList.toggle('visible', pre.scrollWidth > pre.clientWidth + 4);
     update();
     pre.addEventListener('scroll',()=>hint.classList.remove('visible'),{once:true,passive:true});
     if(typeof ResizeObserver!=='undefined')new ResizeObserver(update).observe(pre);
   });
   // MathJax
   const article=document.querySelector('article');
   if(article && /\$\$[^$]+\$\$|(?<![\\$\w])\$(?!\s)[^$\n]+?(?<!\\)\$(?![\w$])/.test(article.textContent||'') && !(window as any).MathJax){
     const s=document.createElement('script');
     s.src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
     s.async=true;
     (window as any).MathJax={tex:{inlineMath:[['$','$']],displayMath:[['$$','$$']]}};
     document.head.appendChild(s);
   }
 },[slug]);
 return null;
}

function App(){
 const [slug,setSlug]=useState(pathSlug());
 const [dark,setDark]=useState(localStorage.getItem('axonweave-theme')!=='light');
 const [mobile,setMobile]=useState(false);
 const [searchOpen,setSearchOpen]=useState(false);
 const [sidebarWidth,setSidebarWidth]=useState<number>(()=>parseInt(localStorage.getItem('axonweave-sidebar')||'240',10));
 const [tocWidth,setTocWidth]=useState<number>(()=>parseInt(localStorage.getItem('axonweave-toc')||'240',10));
 const [version,setVersion]=useState(VERSIONS[0]);
 const dragRef=useRef<{startX:number,startW:number}|null>(null);
 const tocDragRef=useRef<{startX:number,startW:number}|null>(null);
 useEffect(()=>{const fn=()=>setSlug(pathSlug()); addEventListener('popstate',fn);return()=>removeEventListener('popstate',fn)},[]);
 useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('axonweave-theme',dark?'dark':'light')},[dark]);
 useEffect(()=>{
   const onMove=(e:MouseEvent)=>{if(!dragRef.current)return;const w=Math.min(420,Math.max(180,dragRef.current.startW+(e.clientX-dragRef.current.startX)));setSidebarWidth(w)};
   const onUp=()=>{if(dragRef.current){dragRef.current=null;document.body.classList.remove('resizing')}};
   addEventListener('mousemove',onMove);addEventListener('mouseup',onUp);
   return()=>{removeEventListener('mousemove',onMove);removeEventListener('mouseup',onUp)};
 },[]);
 useEffect(()=>{localStorage.setItem('axonweave-sidebar',String(sidebarWidth))},[sidebarWidth]);
 useEffect(()=>{
   const onMove=(e:MouseEvent)=>{if(!tocDragRef.current)return;const w=Math.min(400,Math.max(160,tocDragRef.current.startW-(e.clientX-tocDragRef.current.startX)));setTocWidth(w)};
   const onUp=()=>{if(tocDragRef.current){tocDragRef.current=null;document.body.classList.remove('resizing')}};
   addEventListener('mousemove',onMove);addEventListener('mouseup',onUp);
   return()=>{removeEventListener('mousemove',onMove);removeEventListener('mouseup',onUp)};
 },[]);
 useEffect(()=>{localStorage.setItem('axonweave-toc',String(tocWidth))},[tocWidth]);
 // Global search shortcut: Shift + /
 useEffect(()=>{
   const onKey=(e:KeyboardEvent)=>{
     if(e.shiftKey && e.key==='?'){e.preventDefault();setSearchOpen(true)}
     if(e.key==='Escape')setSearchOpen(false);
   };
   addEventListener('keydown',onKey);return()=>removeEventListener('keydown',onKey);
 },[]);
const page=pages.find(p=>p.slug===slug);
  const html=useMemo(()=>page?rewriteDocLinks(render(page.source)):'', [page]);

  // Programmatic page changes must jump to the top instantly. The default
  // `scroll-behavior:smooth` on <html> would animate every navigation as a
  // slow scroll from the current deep position, and interrupt if the user
  // clicks again mid-flight. Ctrl-click / context-menu navigation to a new
  // URL never runs this (the browser handles real loads); this only covers
  // the in-app SPA transitions.
  const jumpToTop=()=>{
    const htmlEl=document.documentElement;
    const prev=htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior='auto';
    window.scrollTo(0,0);
    htmlEl.style.scrollBehavior=prev;
  };

 useEffect(()=>{document.title=page?`${page.label} · AxonWeave`: 'Page not found · AxonWeave'; const domain=import.meta.env.VITE_ANALYTICS_DOMAIN as string|undefined; if(domain && !document.querySelector('script[data-axonweave-analytics]')){const script=document.createElement('script');script.defer=true;script.dataset.domain=domain;script.dataset.axonweaveAnalytics='true';script.src=`https://plausible.io/js/script.js`;document.head.appendChild(script)}},[page]);
 const sections=[...new Set(pages.map(p=>p.section))];
 const navigate=(s:string)=>{history.pushState({},'',hrefFor(s));setSlug(s);setMobile(false);jumpToTop()};
return <><Helmet><meta name="description" content={page?`AxonWeave ${page.label} documentation`: 'AxonWeave documentation'}/><meta property="og:title" content={page?`${page.label} · AxonWeave`:'AxonWeave Documentation'}/><meta property="og:description" content={page?`AxonWeave ${page.label} documentation`:'AxonWeave documentation'}/><meta name="twitter:card" content="summary"/></Helmet><div className="app">
    <header className="topbar">
        <button className="icon-button mobile-menu" onClick={()=>setMobile(!mobile)} aria-label="Open navigation"><FiMenu size={20}/></button>
        <a className="brand" href="/" onClick={e=>{e.preventDefault();navigate('index')}}><img src={`${BASE}logo.svg`} alt="AxonWeave"/><span>AxonWeave</span></a>
        <nav className="topnav">
          <a href={hrefFor('core-concepts')} onClick={e=>{e.preventDefault();navigate('core-concepts')}}>Learn</a>
          <a href={hrefFor('api-reference')} onClick={e=>{e.preventDefault();navigate('api-reference')}}>API</a>
          <a href={hrefFor('tasks')} onClick={e=>{e.preventDefault();navigate('tasks')}}>Tutorials</a>
        </nav>
        <button className="search-trigger" onClick={()=>setSearchOpen(true)} aria-label="Search documentation (Shift+/)"><FiSearch size={15}/><span>Search documentation...</span><kbd>Shift+/</kbd></button>
        <div className="top-actions">
          <div className="learn-menu"><button className="learn-trigger version-trigger">{version} <FiChevronDown size={12}/></button><div className="learn-dropdown version-dropdown">{VERSIONS.map(v=><button key={v} className={v===version?'version-item active':'version-item'} onClick={()=>setVersion(v)}>{v}</button>)}</div></div>
          <button className="icon-button" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?<FiSun size={19}/>:<FiMoon size={19}/>}</button>
          <a className="nav-playground-btn" href={hrefFor('playground')} onClick={e=>{e.preventDefault();navigate('playground')}}><FiZap size={15}/> Playground</a>
          <a className="gh-link" href="https://github.com/dhakalnirajan/axonweave" target="_blank" rel="noreferrer" aria-label="GitHub repository"><FiGithub size={19}/></a>
        </div>
      </header>
    <div className={`shell${slug==='playground'?' pg-shell':''}`} style={{'--sidebar-w':`${sidebarWidth}px`,'--toc-w':`${tocWidth}px`} as React.CSSProperties}>
    {slug!=='playground'&&mobile&&<div className="sidebar-overlay visible" onClick={()=>setMobile(false)} aria-hidden="true"/>}
    {slug!=='playground'&&<aside className={`sidebar ${mobile?'open':''}`}>
      <div className="sidebar-header">Documentation <button className="icon-button close-mobile" onClick={()=>setMobile(false)}><FiX size={18}/></button></div>
      {sections.map(section=><div className="nav-section" key={section}><div className="nav-label">{section}</div>{pages.filter(p=>p.section===section).map(p=><a key={p.slug} className={slug===p.slug?'active':''} href={hrefFor(p.slug)} onClick={e=>{e.preventDefault();navigate(p.slug)}}>{p.label}</a>)}</div>)}
    </aside>}
    <main id="main" className={`content${slug==='playground'?' pg-content':''}`}>
      {page ? (
        slug === 'playground'
          ? <Playground dark={dark} />
          : (
            <>
              <div className="doc-meta-row">
                <nav className="breadcrumbs" aria-label="Breadcrumb"><a className="crumb-link" href={hrefFor('index')} onClick={e=>{e.preventDefault();navigate('index')}}>Docs</a><span>/</span><span className="crumb-here">{page.label}</span></nav>
                <FeedbackWidget slug={slug}/>
              </div>
              <article dangerouslySetInnerHTML={{__html:html}}/>
              {slug==='index'&&<div className="hero-cta"><button className="primary" onClick={()=>navigate('getting-started')}>Install AxonWeave</button></div>}
              <CodeEnhancer slug={slug}/>
              <PageNav slug={slug} navigate={navigate}/>
            </>
          )
      ) : <NotFound navigate={navigate}/>}
    </main>
    {page&&slug!=='playground'&&<aside className="toc"><div className="toc-title">On this page</div><Toc slug={slug}/></aside>}
    {page&&slug!=='playground'&&<div className="toc-resizer" onMouseDown={e=>{tocDragRef.current={startX:e.clientX,startW:tocWidth};document.body.classList.add('resizing')}} role="separator" aria-orientation="vertical" aria-label="Resize table of contents" tabIndex={0}/>}
   </div>
   {slug!=='playground'&&<div className="sidebar-resizer" onMouseDown={e=>{dragRef.current={startX:e.clientX,startW:sidebarWidth};document.body.classList.add('resizing')}} role="separator" aria-orientation="vertical" aria-label="Resize sidebar" tabIndex={0}/>}
   <footer><span>AxonWeave · Apache-2.0 software</span><span><a href={hrefFor('privacy')} onClick={e=>{e.preventDefault();navigate('privacy')}}>Privacy</a> · <a href={hrefFor('terms')} onClick={e=>{e.preventDefault();navigate('terms')}}>Terms</a></span></footer>
   <CookieConsent/>
   {searchOpen&&<SearchDialog pages={pages} onClose={()=>setSearchOpen(false)} onGo={navigate}/>}
  </div></>
}

function FeedbackWidget({slug}:{slug:string}){
 // 'Was this helpful?' row, TF-style. Stored per page in localStorage;
 // no analytics endpoint is contacted (see Privacy Policy).
 const key=`axonweave-feedback-${slug}`;
 const [vote,setVote]=useState<string|null>(()=>localStorage.getItem(key));
 const cast=(v:'up'|'down')=>{localStorage.setItem(key,v);setVote(v)};
 return <div className="feedback" role="group" aria-label="Page feedback">
  {vote
   ? <span className="feedback-thanks">Thanks for your feedback.</span>
   : <><span className="feedback-label">Was this helpful?</span>
      <button className="feedback-button" onClick={()=>cast('up')} aria-label="Yes, this page was helpful"><FiThumbsUp size={15}/></button>
      <button className="feedback-button" onClick={()=>cast('down')} aria-label="No, this page was not helpful"><FiThumbsDown size={15}/></button></>}
 </div>;
}

function Toc({slug}:{slug:string}){
 const [items,setItems]=useState<{id:string,text:string,level:number}[]>([]);
 const [active,setActive]=useState<string>('');
 useEffect(()=>{
   setActive('');
   const hs=[...document.querySelectorAll('article h2,article h3')];
   const out=hs.map((h,i)=>{const id=`section-${i}-${(h.textContent||'').toLowerCase().replace(/[^a-z0-9]+/g,'-')}`;h.id=id;return{id,text:h.textContent||'',level:h.tagName==='H2'?2:3}});
   setItems(out);
   if(!out.length)return;
   const obs=new IntersectionObserver(entries=>{
     const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
     if(visible[0])setActive(visible[0].target.id);
   },{rootMargin:'-64px 0px -70% 0px'});
   out.forEach(it=>{const el=document.getElementById(it.id);if(el)obs.observe(el)});
   return()=>obs.disconnect();
 },[slug]);
 return <nav>{items.map(x=><a className={(x.level===3?'sub ':'')+(active===x.id?'active':'')} href={`#${x.id}`} key={x.id}><FiChevronRight size={11} className="toc-caret"/>{x.text}</a>)}</nav>
}
function NotFound({navigate}:{navigate:(s:string)=>void}){return <div className="not-found"><p className="eyebrow">404</p><h1>Page not found</h1><p>The requested documentation page does not exist.</p><button className="primary" onClick={()=>navigate('index')}>Return to documentation</button></div>}
function PageNav({slug,navigate}:{slug:string,navigate:(s:string)=>void}){
 // Previous/next footer navigation across the sidebar page order.
 const order=pages.map(p=>p.slug);
 const idx=order.indexOf(slug);
 if(idx===-1)return null;
 const prev=idx>0?pages[idx-1]:null;
 const next=idx<order.length-1?pages[idx+1]:null;
 return <div className="page-nav">
  {prev? <button className="page-nav-cell prev" onClick={()=>navigate(prev.slug)}><span className="page-nav-dir"><FiChevronRight size={12} style={{transform:'rotate(180deg)'}}/> Previous</span><span className="page-nav-label">{prev.label}</span></button> : <span className="page-nav-cell"/>}
  {next? <button className="page-nav-cell next" onClick={()=>navigate(next.slug)}><span className="page-nav-dir">Next <FiChevronRight size={12}/></span><span className="page-nav-label">{next.label}</span></button> : <span className="page-nav-cell"/>}
 </div>;
}
function SearchDialog({pages,onClose,onGo}:{pages:Page[],onClose:()=>void,onGo:(s:string)=>void}){const [q,setQ]=useState('');const results=pages.filter(p=>(p.label+' '+p.source).toLowerCase().includes(q.toLowerCase())).slice(0,8);return <div className="overlay" onMouseDown={onClose}><div className="search-dialog" onMouseDown={e=>e.stopPropagation()}><div className="search-head"><FiSearch size={18}/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder="Search documentation"/><button className="icon-button" onClick={onClose}><FiX size={18}/></button></div>{results.map(r=><button className="search-result" key={r.slug} onClick={()=>{onGo(r.slug);onClose()}}><strong>{r.label}</strong><span>{r.section}</span></button>)}</div></div>}
function CookieConsent(){const [show,setShow]=useState(false);const [prefs,setPrefs]=useState(false);useEffect(()=>{const stored=localStorage.getItem('axonweave-cookie-consent');if(!stored)setShow(true)},[]);const consent=(value:string)=>{localStorage.setItem('axonweave-cookie-consent',value);setShow(false);setPrefs(false)};if(!show)return null;return <div className="cookie" role="dialog" aria-label="Cookie preferences">{!prefs?<><div><strong>Privacy & cookies</strong><p>This site uses essential cookies only. Optional analytics, if enabled, will be disclosed in the Privacy Policy. You may accept all or reject non-essential cookies.</p></div><div className="cookie-actions"><button className="primary" onClick={()=>consent('all')}>Accept all</button><button className="secondary" onClick={()=>consent('essential')}>Reject all</button><button className="ghost" onClick={()=>setPrefs(true)}>Manage preferences</button></div></>:<><div><strong>Manage preferences</strong><label className="cookie-pref"><input type="checkbox" disabled checked /> Essential (always on)</label><label className="cookie-pref"><input type="checkbox" /> Analytics (coming soon)</label></div><div className="cookie-actions"><button className="primary" onClick={()=>consent('all')}>Save and accept</button><button className="ghost" onClick={()=>setPrefs(false)}>Back</button></div></>}</div>}

createRoot(document.getElementById('root')!).render(<HelmetProvider><App/></HelmetProvider>);
