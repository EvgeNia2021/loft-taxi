import React, { memo, useState, useCallback } from "react";
import { Button, Paper, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Arrow from "../../components/svg/arrow";
import Dot from "../../components/svg/dot";
import Cross from "../../components/svg/cross";
import Tick from "../../components/svg/tick";
import { useEffect } from "react";
import { fetchListRequest } from "../../actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addressList } from "../../reducers/addressList";
import { getAddressList } from "./selectors";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form"



const OrderForm = React.memo(props => {
  const { fetchListRequest } = props;
  const addressList = useSelector(getAddressList)
  const [route, setRoute] = React.useState({ from: '', to: '' })



  const handleChange = event => {
    const input = event.target

    setRoute({ ...route, [input.name]: input.value });
  }


  useEffect(() => {
    fetchListRequest();
  }, [])

  const { from, to } = props;

  return (
    <>
      <Paper className="order">
        <form >
          <div className="order__top">
            <div className="order__wrapper">
              <span className="order__icon">
                <Dot />
              </span>
              <FormControl className=''>
                <InputLabel htmlFor="from">Откуда</InputLabel>
                <Select className="order__input" id="address1" addressKey="from" placeholder="Откуда"
                  value={route.from || ""}
                  // options={availableOptions}
                  name={from}
                  inputProps={{ name: 'from', id: 'from' }}
                  IconComponent={Tick}
                  onChange={handleChange}
                  autoWidth>{
                    addressList && addressList.filter(item => item !== route.to).map(item => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))
                  }</Select>
              </FormControl>
              <div className="order__controls">

                <button className="order__cross"><Cross /></button>
                <button className="order__tick"><Tick /></button>
              </div>
            </div>
            <div className="order__wrapper">
              <span className="order__icon">
                <Arrow />
              </span>
              <FormControl className=''>
                <InputLabel htmlFor="to">Куда</InputLabel>
                <Select className="order__input" id="address2" addressKey="to" placeholder="Куда"
                  value={route.to || ""}
                  // options={availableOptions}
                  name={to}
                  inputProps={{ name: 'to', id: 'to' }}
                  IconComponent={Tick}
                  onChange={handleChange}
                  autoWidth
                >{
                    addressList && addressList.filter(item => item !== route.from).map(item => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))
                  }</Select>
              </FormControl>
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
)

OrderForm.propTypes = {
  cardAdded: PropTypes.bool,
  addressList: PropTypes.array,
  fetchListRequest: PropTypes.func,
  addressKey: PropTypes.string,
  otherAddress: PropTypes.string
}

const mapStateToProps = state => ({
  addressList: getAddressList(state)
});

const mapDispatchToProps = {
  fetchListRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
