import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      {/*header.js*/}
      <Header></Header>
      <section id="page1" data-role="page">
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      {/*footer.js*/}
      <Footer></Footer>
    </div>
  );
}

export default App; // default가 있으면 {}블록 없이, 그냥 import/export면 {이름}
