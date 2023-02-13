import { Fragment } from "react"
import { AvailableMeals } from "../AvailableMeals/AvailableMeals"
import { MealsSummary } from "../MealsSummary/MealsSummary"
export const Meals = props => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}