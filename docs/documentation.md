## Functions

<dl>
<dt><a href="#App">App()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>Componente principal do aplicativo.
Roteia as p├íginas usando o React Router e renderiza o layout da aplica├º├úo, incluindo a navega├º├úo e o conte├║do das p├íginas.</p>
</dd>
<dt><a href="#Contact">Contact()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina de Contato.
Exibe as informa├º├Áes de contato e links para as redes sociais da Session Fit.</p>
</dd>
<dt><a href="#NavbarComponent">NavbarComponent()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>Componente de navega├º├úo (Navbar).
Exibe a barra de navega├º├úo com links para as p├íginas principais e um menu suspenso.</p>
</dd>
<dt><a href="#PaginationComponent">PaginationComponent()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>Componente de Pagina├º├úo.
Exibe um controle de navega├º├úo com bot├Áes para navegar entre as p├íginas.</p>
</dd>
<dt><a href="#PlanCard">PlanCard(props)</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>Componente de Cart├úo de Plano.
Exibe as informa├º├Áes de um plano de assinatura, incluindo t├¡tulo, caracter├¡sticas e pre├ºo.</p>
</dd>
<dt><a href="#AboutPage">AboutPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina &quot;Sobre N├│s&quot;.
Exibe informa├º├Áes sobre a miss├úo, vis├úo, valores e objetivos da Session Fit.</p>
</dd>
<dt><a href="#ContactPage">ContactPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina de Contato.
Exibe as informa├º├Áes de contato da empresa e permite que os usu├írios enviem uma mensagem.</p>
</dd>
<dt><a href="#FAQPage">FAQPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina de Perguntas Frequentes (FAQ).
Exibe as respostas para as d├║vidas mais comuns dos usu├írios.</p>
</dd>
<dt><a href="#EspacoClientePage">EspacoClientePage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina do Espa├ºo do Cliente da Session Fit.
Apresenta os benef├¡cios exclusivos oferecidos aos alunos da academia.</p>
</dd>
<dt><a href="#FranqueadoPage">FranqueadoPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina de informa├º├Áes para interessados em se tornar franqueados da Session Fit.</p>
</dd>
<dt><a href="#HomePage">HomePage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina inicial da academia, exibindo informa├º├Áes sobre os treinos, benef├¡cios e planos dispon├¡veis.</p>
</dd>
<dt><a href="#GymHistoryPage">GymHistoryPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina que apresenta a hist├│ria da academia Session Fit.</p>
</dd>
<dt><a href="#SustainabilityPage">SustainabilityPage()</a> ÔçÆ <code>JSX.Element</code></dt>
<dd><p>P├ígina que apresenta informa├º├Áes sobre sustentabilidade no mundo fitness.</p>
</dd>
</dl>

<a name="App"></a>

## App() ÔçÆ <code>JSX.Element</code>
Componente principal do aplicativo.
Roteia as p├íginas usando o React Router e renderiza o layout da aplica├º├úo, incluindo a navega├º├úo e o conte├║do das p├íginas.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura completa do aplicativo com navega├º├úo e rotas.  
**Component**:   
<a name="Contact"></a>

## Contact() ÔçÆ <code>JSX.Element</code>
P├ígina de Contato.
Exibe as informa├º├Áes de contato e links para as redes sociais da Session Fit.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura da p├ígina de contato.  
**Component**:   
<a name="NavbarComponent"></a>

## NavbarComponent() ÔçÆ <code>JSX.Element</code>
Componente de navega├º├úo (Navbar).
Exibe a barra de navega├º├úo com links para as p├íginas principais e um menu suspenso.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura do componente Navbar.  
**Component**:   
<a name="PaginationComponent"></a>

## PaginationComponent() ÔçÆ <code>JSX.Element</code>
Componente de Pagina├º├úo.
Exibe um controle de navega├º├úo com bot├Áes para navegar entre as p├íginas.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura do componente de pagina├º├úo.  
**Component**:   
<a name="PlanCard"></a>

## PlanCard(props) ÔçÆ <code>JSX.Element</code>
Componente de Cart├úo de Plano.
Exibe as informa├º├Áes de um plano de assinatura, incluindo t├¡tulo, caracter├¡sticas e pre├ºo.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - O cart├úo com as informa├º├Áes do plano.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | Propriedades passadas para o componente. |
| props.title | <code>string</code> | O t├¡tulo do plano. |
| props.features | <code>Array.&lt;string&gt;</code> | Lista de caracter├¡sticas do plano. |
| props.price | <code>string</code> | O pre├ºo do plano. |

<a name="AboutPage"></a>

## AboutPage() ÔçÆ <code>JSX.Element</code>
P├ígina "Sobre N├│s".
Exibe informa├º├Áes sobre a miss├úo, vis├úo, valores e objetivos da Session Fit.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura da p├ígina de sobre n├│s.  
**Component**:   
<a name="ContactPage"></a>

## ContactPage() ÔçÆ <code>JSX.Element</code>
P├ígina de Contato.
Exibe as informa├º├Áes de contato da empresa e permite que os usu├írios enviem uma mensagem.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura da p├ígina de contato.  
**Component**:   
<a name="FAQPage"></a>

## FAQPage() ÔçÆ <code>JSX.Element</code>
P├ígina de Perguntas Frequentes (FAQ).
Exibe as respostas para as d├║vidas mais comuns dos usu├írios.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - A estrutura da p├ígina de perguntas frequentes.  
**Component**:   
<a name="EspacoClientePage"></a>

## EspacoClientePage() ÔçÆ <code>JSX.Element</code>
P├ígina do Espa├ºo do Cliente da Session Fit.
Apresenta os benef├¡cios exclusivos oferecidos aos alunos da academia.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Estrutura da p├ígina de benef├¡cios ao cliente.  
**Component**:   
<a name="FranqueadoPage"></a>

## FranqueadoPage() ÔçÆ <code>JSX.Element</code>
P├ígina de informa├º├Áes para interessados em se tornar franqueados da Session Fit.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Retorna a estrutura da p├ígina para franqueados.  
**Component**:   
<a name="HomePage"></a>

## HomePage() ÔçÆ <code>JSX.Element</code>
P├ígina inicial da academia, exibindo informa├º├Áes sobre os treinos, benef├¡cios e planos dispon├¡veis.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Retorna o layout da p├ígina inicial.  
**Component**:   
<a name="GymHistoryPage"></a>

## GymHistoryPage() ÔçÆ <code>JSX.Element</code>
P├ígina que apresenta a hist├│ria da academia Session Fit.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Retorna o layout da p├ígina de hist├│ria da academia.  
**Component**:   
<a name="SustainabilityPage"></a>

## SustainabilityPage() ÔçÆ <code>JSX.Element</code>
P├ígina que apresenta informa├º├Áes sobre sustentabilidade no mundo fitness.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - Retorna o layout da p├ígina de sustentabilidade.  
**Component**:   
<a name="SustainabilityPage..sustainabilityTopics"></a>

### SustainabilityPage~sustainabilityTopics : <code>Array.&lt;{title: string, content: string, img: string}&gt;</code>
Lista de t├│picos sobre sustentabilidade e suas respectivas informa├º├Áes.

**Kind**: inner constant of [<code>SustainabilityPage</code>](#SustainabilityPage)  
