const validate = (value) => {
  const errors = {};

  if (!value.firstName) {
    errors.firstName = "لطفا نام خود را وارد نمایید";
  } else if (value.firstName.length > 15) {
    errors.firstName = "نام باید حداکثر 15 کلمه باشد";
  }

  if (!value.lastName) {
    errors.lastName = "لطفا نام خانوادگی خود را وارد نمایید";
  } else if (value.lastName.length > 15) {
    errors.lastName = "نام خانوادگی شما حداکثر باید 15 کلمه باشد";
  }

  if (!value.email) {
    errors.email = "لطفا ایمیل خود را وارد نمایید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = "لطفا ایمیل خود را به درستی وارد نمایید";
  }

  if (!value.address) {
    errors.address = "لطفا آدرس خود را وارد نمایید";
  } else if (!value.postCode) {
    errors.postCode = "کد پستی ضروری میباشد";
  }

  // let postCode = parseInt(value.postCode);
  if (!/^[0-9]+$/.test(value.postCode)) {
    // console.log(/^[0-9]+$/.test(postCode));
    errors.postCode = "لطفا فقط عدد وارد نمایید";
  } else if (!value.postCode) {
    errors.postCode = "لطفا کد پستی را پر نمایید";
  }

  // let phone = parseInt(value.phone);
  if (/^[0-9]+$/g.test(value.phone) === false) {
    errors.phone = "لطفا فقط عدد وارد نمایید";
  } else if (value.phone.length !== 11 || value.phone.length < 11) {
    errors.phone = "شماره همراه 11 رقم میباشد";
  }

  return errors;
};

export default validate;
