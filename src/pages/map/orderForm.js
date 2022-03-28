import React, { memo } from "react";
import { Button, Paper, Select } from "@material-ui/core";
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


const OrderForm = React.memo(props => {
  const { fetchListRequest, addressList } = props;
  
  // const address = useSelector(state => state.addressList);
  // const options = address.map(option => ({ value: option, label: option }));
  useEffect(() => {
    fetchListRequest();
  }, [])

  return (
    <>
      <Paper className="order">
        <form >
          <div className="order__top">
            <div className="order__wrapper">
              <span className="order__icon">
                <Dot />
              </span>
              <Select className="order__input" id="address1" name="from" placeholder="Откуда" addressKey="from"></Select>
              <div className="order__controls">
              
                <button className="order__cross"><Cross /></button>
                <button className="order__tick"><Tick /></button>
              </div>
            </div>
            <div className="order__wrapper">
              <span className="order__icon">
                <Arrow />
              </span>
              <Select className="order__input" id="address2" name="address2" placeholder="Куда" addressKey="to" 
             ></Select>
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
  addressKey: PropTypes.string
}

const mapStateToProps = state => ({
  addressList: getAddressList(state)
});

const mapDispatchToProps = {
  fetchListRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
