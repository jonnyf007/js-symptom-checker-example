/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

import _ from 'lodash';

export default class Patient {
  constructor() {
    this.symptoms = {};
    this.sex = 'male';
    // eslint-disable-next-line object-curly-spacing
    this.age = { value: 30 };
  }

  setSex(sex) {
    this.sex = sex;
  }

  setAge(age) {
    // eslint-disable-next-line radix
    const parseAge = Number.parseInt(age);
    // eslint-disable-next-line object-curly-spacing
    this.age = { value: parseAge };
  }

  addSymptomsGroup(group) {
    Object.assign(this.symptoms, group);
  }

  removeSymptom(id) {
    delete this.symptoms[id];
  }

  toDiagnosis() {
    const res = {
      sex: this.sex,
      age: this.age,
      evidence: []
    };

    res.evidence = _.map(this.symptoms, (symptom, symptomId) => {
      const getChoiceId = (choice) => {
        if (choice === true) {
          return 'present';
        }
        if (choice === false) {
          return 'absent';
        }
        return 'unknown';
      };

      const diagnosisSymptom = {
        id: symptomId,
        choice_id: getChoiceId(symptom.reported)
      };

      if (symptom.source === 'initial') {
        Object.assign(diagnosisSymptom, {
          source: 'initial'
        });
      }

      if (symptom.source === 'suggest') {
        Object.assign(diagnosisSymptom, {
          source: 'suggest'
        });
      }

      return diagnosisSymptom;
    });
    return res;
  }

  toSuggest() {
    return this.toDiagnosis();
  }

  toParse(text) {
    return {
      text,
      sex: this.sex,
      age: this.age
    };
  }

  reset() {
    this.symptoms = {};
  }
}
