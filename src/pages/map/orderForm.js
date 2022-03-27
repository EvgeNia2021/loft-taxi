import React from "react";
import { Button, Input, FormLabel, Paper } from "@material-ui/core";
import Arrow from "../../components/svg/arrow";
import Dot from "../../components/svg/dot";
import Cross from "../../components/svg/cross";
import Tick from "../../components/svg/tick";


export const OrderForm = () => {
  return (
    <>
      <Paper className="order">
        <form >
          <div className="order__top">
            {/* <FormLabel className="order__label" htmlFor="address1">Откуда</FormLabel> */}
            <div className="order__wrapper">
              <span className="order__icon">
                <Dot />
              </span>
              <Input className="order__input" id="address1" name="address1" placeholder="Откуда" />
              <div className="order__controls">
                <button className="order__cross"><Cross /></button>
                <button className="order__tick"><Tick /></button>
              </div>
            </div>
            {/* <FormLabel className="order__label" htmlFor="address2">Куда</FormLabel> */}
            <div className="order__wrapper">
              <span className="order__icon">
                <Arrow />
              </span>
              <Input className="order__input" id="address2" name="address2" placeholder="Куда" />
              <div className="order__controls">
                <button className="order__cross"><Cross /></button>
                <button className="order__tick"><Tick /></button>
              </div>
            </div>

          </div>
          <Paper elevation={4} className="order__bottom">
            <div className="order__choice">
              <button>
              <Paper elevation={5} className="order__option">
                <div className="order__name">Стандарт</div>
                <p className="order__cost">Стоимость</p>
                <div className="order__price">150 ₽</div>
                <div className="order__car"></div>
              </Paper></button>
              <button>
              <Paper elevation={5} className="order__option">
                <div className="order__name">Премиум</div>
                <p className="order__cost">Стоимость</p>
                <div className="order__price">250 ₽</div>
                <div className="order__car2"></div>
              </Paper></button>
              <button>
              <Paper elevation={5} className="order__option">
                <div className="order__name">Бизнес</div>
                <p className="order__cost">Стоимость</p>
                <div className="order__price">300 ₽</div>
                <div className="order__car3"></div>
              </Paper></button>
            </div>
            <Button variant="contained" color="primary" type="submit" className="f24">Заказать</Button>
          </Paper>
        </form>
      </Paper>
    </>
  );
}
