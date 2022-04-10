import React, { useState } from "react";
import { Button, Paper, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Arrow from "../../components/svg/arrow";
import Dot from "../../components/svg/dot";
import Cross from "../../components/svg/cross";
import Tick from "../../components/svg/tick";
import { useEffect } from "react";
import { fetchListRequest, fetchRoute } from "../../actions";
import PropTypes from 'prop-types';
import { getAddressList } from "./selectors";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core"
import { theme } from "../../loft-taxi-theme";

const useStyles = makeStyles({
  select: {
    height: 60,
    display: "inline-flex",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 5,

  },
  cross: {
    position: "absolute",
    top: 39,
    right: 20,
    borderRight: "1px solid #E0E0E0",
    marginRight: 11,
    paddingRight: 11,
    alignSelf: "flex-end",
    zIndex: 10,
  },
  control: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    marginTop: 8,
  },
  car: {
    padding: 11,
    width: 106,
    height: 167,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: `${theme.transitions.duration.standard}ms`,
    opacity: 0.5,
    "&:hover": {
      boxShadow: theme.shadows[5],
      opacity: 1,
    }
  }
  ,
  cardActive: {
    boxShadow: theme.shadows[6],
    opacity: 1
  },
  newButton: {
    fontSize: 18,
  }
});

const OrderForm = React.memo(props => {

  const classes = useStyles();
  const addressList = useSelector(getAddressList)
  const [route, setRoute] = useState({ from: '', to: '' })
  const [showOrderForm, setShowOrderForm] = useState(true);
  const [activeRate, setActiveRate] = useState("standart")

  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const { from, to } = data
    dispatch(fetchRoute(from, to))
    setShowOrderForm(false);
  }

  useEffect(() => {
    dispatch(fetchListRequest());
  }, [])

  const handleChange = event => {
    const input = event.target

    setRoute({ ...route, [input.name]: input.value });
  }


  const handleNewOrder = () => {
    setShowOrderForm(true);
    props.resetRoute()
    setRoute({});
  }



  const clearInputFrom = () => {
    setRoute({ ...route, from: '' });
  }

  const clearInputTo = () => {
    setRoute({ ...route, to: '' });
  }


  const setRate = (rate) => () => setActiveRate(rate)

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
                <FormControl className={classes.control}>
                  <InputLabel htmlFor="from" className={classes.label}>Откуда</InputLabel>
                  <Select className={classes.select} id="address1" placeholder="Откуда"
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
                  <button className={classes.cross} onClick={clearInputFrom} type="reset"><Cross /></button>
                </FormControl>
              </div>
              <div className="order__wrapper">
                <span className="order__icon">
                  <Arrow />
                </span>
                <FormControl className={classes.control}>
                  <InputLabel htmlFor="to" className={classes.label}>Куда</InputLabel>
                  <Select className={classes.select} id="address2" placeholder="Куда"
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
                  <button className={classes.cross} onClick={clearInputTo} type="reset" ><Cross /></button>
                </FormControl>
              </div>

            </div>
            <Paper elevation={4} className="order__bottom">
              <ul className="order__choice">
                <li className="order__option">
                  <Paper elevation={5} className={`${classes.car} ${activeRate == 'standart' && classes.cardActive}`}
                    onClick={setRate("standart")}
                  >
                    <div className="order__name">Стандарт</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">150 ₽</div>
                    <div className="order__car"></div>
                  </Paper>
                </li>
                <li className="order__option">
                  <Paper elevation={5} className={`${classes.car} ${activeRate == 'premium' && classes.cardActive}`}
                    onClick={setRate("premium")}
                  >
                    <div className="order__name">Премиум</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">250 ₽</div>
                    <div className="order__car2"></div>
                  </Paper>
                </li>
                <li className="order__option">
                  <Paper elevation={5} className={`${classes.car} ${activeRate == 'business' && classes.cardActive}`}
                    onClick={setRate("business")}
                  >
                    <div className="order__name">Бизнес</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">300 ₽</div>
                    <div className="order__car3"></div>
                  </Paper>
                </li>
              </ul>
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
          <Button variant="contained" color="primary" onClick={handleNewOrder} className={classes.newButton} >Сделать новый заказ</Button>

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


export default OrderForm
