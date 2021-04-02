import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem
          repository="unform2"
          description="Forms in React"
          link="https://github.com/unform/unform"
        />

        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}