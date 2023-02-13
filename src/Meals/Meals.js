import { AvailableMeals } from "./AvailableMeals/AvailableMeals"
import { MealsSummary } from "./MealsSummary/MealsSummary"
import { Fragment } from "react"
import { MealsItems } from "./MealsItems/MealsItems"
export const Meals = props => {

    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}