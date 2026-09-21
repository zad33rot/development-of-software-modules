interface FiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedSchool: string;
  setSelectedSchool: (value: string) => void;
}

export const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedSchool,
  setSelectedSchool,
}: FiltersProps) => {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="name-filter">Name</label>
        <input
          id="name-filter"
          type="text"
          placeholder="Hermione"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="school-filter">School</label>
        <select
          className={selectedSchool === '' ? 'placeholder-text' : ''}
          value={selectedSchool}
          onChange={(e) => setSelectedSchool(e.target.value)}
        >
          <option value="">Choose one</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>
      </div>
    </div>
  );
};