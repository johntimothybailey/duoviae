import { Category } from '../../state/modules/categories/Models'

export interface Props {
  item: Category
  onPress: (item: Category) => void
}
