import React, { useState } from "react";
import { Button, Paper, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Arrow from "../../components/svg/arrow";
import Dot from "../../components/svg/dot";
import Cross from "../../components/svg/cross";
import Tick from "../../components/svg/tick";
import { useEffect } from "react";
import { fetchListRequest, fetchRoute } from "../../actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getAddressList } from "./selectors";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";



const OrderForm = React.memo(props => {
  const { fetchListRequest, fetchRoute } = props;
  const addressList = useSelector(getAddressList)
  const [route, setRoute] = useState({ from: '', to: '' })
  const [showOrderForm, setShowOrderForm] = useState(true);

  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const { from, to } = data
    dispatch(fetchRoute(from, to))
    setShowOrderForm(false);
  }

  useEffect(() => {
    fetchListRequest();
  }, [])

  const handleChange = event => {
    const input = event.target

    setRoute({ ...route, [input.name]: input.value });
  }

  const handleNewOrder = () => {
    setShowOrderForm(true);
  }

  const clearInput = () => {
    setRoute({});
  }

  return (
    <>
      {showOrderForm ? (
        <Paper className="order">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="order__top">
              <div className="order__wrapper">
                <span className="order__icon">
                  <Dot />
                </span>
                <FormControl className='form__control'>
                  <InputLabel htmlFor="from">Откуда</InputLabel>
                  <Select className="order__input" id="address1" placeholder="Откуда"
                    value={route.from || ""}
                    IconComponent={Tick}
                    autoWidth
                    {...register('from')}
                    onChange={handleChange}
                  >{
                      addressList && addressList.filter(item => item !== route.to).map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }
                  </Select>
                  <button className="order__cross" onClick={clearInput} type="reset" ><Cross /></button>
                </FormControl>
                {/* <div className="order__controls">

                 
                </div> */}
              </div>
              <div className="order__wrapper">
                <span className="order__icon">
                  <Arrow />
                </span>
                <FormControl className="form__control">
                  <InputLabel htmlFor="to">Куда</InputLabel>
                  <Select className="order__input" id="address2" placeholder="Куда"
                    value={route.to || ""}
                    IconComponent={Tick}
                    autoWidth
                    {...register('to')}
                    onChange={handleChange}
                  >{
                      addressList && addressList.filter(item => item !== route.from).map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }</Select>
                  <button className="order__cross" type="reset" onClick={clearInput}><Cross /></button>
                </FormControl>
                {/* <div className="order__controls">
                  
                </div> */}
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
              <Button variant="contained" color="primary" type="submit" className="f24" disabled={!route.from || !route.to} >Заказать</Button>
            </Paper>
          </form>
        </Paper>
      ) : (
        <Paper elevation={4} className="order__placed">
          <div className="order__text">
            <div className="order__title">Заказ размещен</div>
            <div className="order__subtitle">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
          </div>
          <Button variant="contained" color="primary" onClick={handleNewOrder} className="f24">Сделать новый заказ</Button>

        </Paper>
      )}
    </>
  );

}
)

OrderForm.propTypes = {
  cardAdded: PropTypes.bool,
  addressList: PropTypes.array,
  fetchListRequest: PropTypes.func,
  fetchRoute: PropTypes.func,
}

const mapStateToProps = state => ({
  addressList: getAddressList(state),
  route: state.route,
});

const mapDispatchToProps = {
  fetchListRequest, fetchRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
