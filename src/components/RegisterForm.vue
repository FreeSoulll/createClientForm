<template>
  <div>
    <h3 >Создать заявку</h3>
    <form @submit.prevent="onSubmit">

      <h4>Личные данные:</h4>
      <div class="form-single-block">

        <div class="form-control" :class="{invalid : v$.surName.$error}">
          <label for="surName">Фамилия</label>
          <input type="text" id="surName" v-model.trim="state.surName">
          <small v-if="v$.surName.$error">{{ errors.surName }}</small>
        </div>

        <div class="form-control">
          <label for="name">Имя</label>
          <input type="text" id="name" v-model.trim="state.name">
        </div>

        <div class="form-control">
          <label for="secondName">Отчество</label>
          <input type="text" id="secondName" v-model.trim="state.secondName">
        </div>

        <div class="form-control" :class="{invalid : v$.birthday.$error}">
          <label for="birthday">Дата рождения</label>
          <input type="text" id="birthday" v-model="state.birthday">
          <small v-if="v$.birthday.$error">{{ errors.birthday }}</small>
        </div>

        <div class="form-control" :class="{invalid : v$.telephone.$error}">
          <label for="telephone">Телефон</label>
          <input type="text" id="telephone" v-model="state.telephone">
          <div v-if="v$.telephone.$error">
            <small v-if="v$.telephone.first.$invalid">{{ errors.telephone.first }}</small>
            <small v-else>{{ errors.telephone.length }}</small>
          </div>
        </div>

        <div class="form-control">
          <label for="sex">Пол</label>
          <input type="text" id="sex" v-model.trim="state.sex">
        </div>

        <div class="form-control" :class="{invalid : v$.client.$error}">
          <label for="client">Группа клиентов</label>
            <select id="client" v-model="state.client" multiple>
              <option v-for='(client,idx) in clientsGroup' :key="idx" :value="clientsGroup[idx]">{{ clientsGroup[idx] }}</option>
            </select>
            <small v-if="v$.client.$error">{{ errors.client }}</small>
        </div>

        <div class="form-control">
          <label for="doctor">Лечащий врач</label>
            <select id="doctor" v-model="state.status" >
              <option disabled value="">Выберите врача</option>
              <option v-for='(doctor,idx) in doctors' :key="idx" :value="doctors[idx]">{{ doctors[idx] }}</option>
            </select>
        </div>

        <div class="form-control form-checkbox">
          <label for="sms">Не отправлять СМС</label>
          <input type="checkbox" id="sms" v-model="state.sms">
        </div>

      </div>

      <h4>Адрес:</h4>

      <div class="form-single-block">
        <div class="form-control">
          <label for="index">Индекс</label>
          <input type="number" id="index" v-model.trim="state.index">
        </div>

        <div class="form-control">
          <label for="country">Страна</label>
          <input type="text" id="country" v-model.trim="state.country">
        </div>

        <div class="form-control">
          <label for="region">Область</label>
          <input type="text" id="region" v-model.trim="state.region">
        </div>

        <div class="form-control" :class="{invalid : v$.city.$error}">
          <label for="city">Город</label>
          <input type="text" id="city" v-model.trim="state.city">
          <small v-if="v$.city.$error">{{ errors.city}}</small>
        </div>

        <div class="form-control">
          <label for="street">Улица</label>
          <input type="text" id="street" v-model="state.street">
        </div>

        <div class="form-control">
          <label for="house">Дом</label>
          <input type="number" id="house" v-model.trim="state.house">
        </div>
      </div>

      <h4>Паспорт:</h4>

      <div class="form-single-block">

        <div class="form-control" :class="{invalid : v$.typeDoc.$error}">
          <label for="typeDoc">Тип документа</label>
            <select id="typeDoc" v-model="state.typeDoc">
              <option v-for='(doc,idx) in typeDocs' :key="idx" :value="typeDocs[idx]">{{ typeDocs[idx] }}</option>
            </select>
           <small v-if="v$.typeDoc.$error">{{ errors.typeDoc}}</small>
        </div>

        <div class="form-control">
          <label for="series">Серия</label>
          <input type="number" id="series" v-model="state.series">
        </div>

        <div class="form-control">
          <label for="number">Номер</label>
          <input type="number" id="number" v-model="state.number">
        </div>

        <div class="form-control">
          <label for="given">Кем выдан</label>
          <input type="number" id="given" v-model="state.given">
        </div>

        <div class="form-control" :class="{invalid : v$.dateGiven.$error}">
          <label for="dateGiven">Дата выдачи</label>
          <input type="text" id="dateGiven" v-model.trim="state.dateGiven">
           <small v-if="v$.dateGiven.$error">{{ errors.dateGiven }}</small>
        </div>

      </div>
      <button type="submit" class="btn primary" >Добавить</button>
  <div>
  </div>
    </form>
  </div>
</template>

<script>
import  useValidate  from '@vuelidate/core'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { reactive } from 'vue'

export default {
  emits:['show'],
  props: {
    modal: {
      type: String
    }
  },
  setup(props, { emit }) {
    const status = ''
    const doctors = ['Иванов','Захаров','Чернышева']
    const clientsGroup = ['VIP','Проблемные','ОМС']
    const typeDocs = ['Паспорт','Свидетельство о рождении','Вод. удостоверение']
    const state = reactive({
      sex: '',
      sms: '',
      index: '',
      country: '',
      region: '',
      street: '',
      house: '',
      series: '',
      number: '',
      given: '',
      secondName: '',
      surName: '',
      name: '',
      birthday: '',
      telephone: '',
      client: [],
      city: '',
      typeDoc:'',
      dateGiven: ''
    })

    const errors = {
      surName: 'Введите Вашу фамилию',
      name: 'Введите Ваше имя',
      birthday: 'Дата рождения должна быть в формате ДД.ММ.ГГГГ',
      telephone: {
        length: 'Введите Ваш телефон. Кол-во символов - 11',
        first: 'Номер должен начинаться с 7'
      },
      client: 'Выберите группу клиентов',
      city: 'Укажите город',
      typeDoc:'Выберите тип документа',
      dateGiven: 'Дата выдачи должна быть в формате ДД.ММ.ГГГГ'
    }

    const rules =  {
      surName: {required},
      name: {required},
      birthday: {
        required,
        validFormat: val => /^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{4}$/.test(val),
      },
      telephone: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        first(telephone) {
          const regex = /^[7]+/;
          return regex.test(telephone);
        }
      },
      client: {required},
      city: {required},
      typeDoc: {required},
      dateGiven: {
        required,
        validFormat: val => /^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{4}$/.test(val),
      },
    }

    const v$ = useValidate(rules, state)

    const onSubmit = () => {
      v$.value.$touch()

      if (!v$.value.$invalid) {
        v$.value.$reset()
        for (let key in state) {
          if(typeof state[key] === "string") {
            state[key] = ''
          }
          if(Array.isArray(state[key])) {
            state[key] = []
          }
        }
        emit('show')
      }
      v$.value.$dirty = false
    }

    return {
      state,
      v$,
      onSubmit,
      errors,
      status,
      doctors,
      clientsGroup,
      typeDocs
    }
  },

}
</script>