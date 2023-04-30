import { Article } from './components/Article/Article';
import { Header } from './components/Header/Header';
import './style.css';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />

      <Article />
    </div>
  );
};
