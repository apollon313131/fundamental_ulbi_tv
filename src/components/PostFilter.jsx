import React from "react";
import MyInput from "../components/input/MyInput";
import MySelect from "../components/UI/button/select/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        type="text"
        value={filter.query}
        placeholder="Поиск..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "title", name: "По описанию" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
