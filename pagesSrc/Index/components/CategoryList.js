//@flow
import { useQuery } from '@apollo/react-hooks';

import CategoryItem from './CategoryItem';
import { H6 } from '../../../components/Typography';
import { Categories, Category, CategoryImage, CategoryName } from '../style';

import { CATEGORIES_QUERY } from '../../../api/query/category';

export default function CategoriesResult() {
  const {
    loading,
    error,
    data: { categories }
  } = useQuery(CATEGORIES_QUERY);

  if (loading) return <H6>Loading...</H6>;
  if (error) return <H6>Error...</H6>;
  if (categories.length > 0) {
    return (
      <Categories>
        {categories.map(({ id, name, image: { url } }) => (
          <CategoryItem key={id} url={url} name={name} />
        ))}
      </Categories>
    );
  } else {
    return <H6>Nothing to show...</H6>;
  }
}
