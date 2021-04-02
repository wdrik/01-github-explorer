import { Counter } from './components/Conter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}