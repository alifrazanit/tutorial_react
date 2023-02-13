import classes from './AvailableMeals.module.css';
import { MealsItems } from '../MealsItems/MealsItems';
import { Card } from '../../template/Card/Card';
export const AvailableMeals = props => {
    const DUMMY_MEALS = [
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
        {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
        {
          id: 'm3',
          name: 'Barbecue Burger',
          description: 'American, raw, meaty',
          price: 12.99,
        },
        {
          id: 'm4',
          name: 'Green Bowl',
          description: 'Healthy...and green...',
          price: 18.99,
        },
      ];

    const listMeals = DUMMY_MEALS.map(data => 
        (<MealsItems 
            id={data.id}
            name={data.name}
            description={data.description}
            price={data.price}
            key={data.id}
        />))
    return (
        <div className={classes.meals}>
            <Card>
                <ul>{listMeals}</ul>
            </Card>
        </div>
    )
}