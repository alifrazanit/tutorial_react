import { AvailableMeals } from "./AvailableMeals/AvailableMeals"
import { MealsSummary } from "./MealsSummary/MealsSummary"
import { Fragment } from "react"
export const Meals = props => {

    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}