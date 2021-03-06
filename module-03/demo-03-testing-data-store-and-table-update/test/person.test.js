import { describe, it } from 'mocha';
import { expect } from 'chai';
import Person from '../src/person.js';

describe('Person', () => {
    it('should return a person instance from a string', () => {
        const person = Person.generateInstanceFromString(
            '1 Bike,Car 20000 2022-01-01 2022-02-01'
        )

        const expected = {
            from: '2022-01-01',
            to: '2022-02-01',
            vehicles: ['Bike', 'Car'],
            kmTraveled: "20000",
            id: '1'
        }

        expect(person).to.deep.equal(expected)
    })

    it('should format values', () => {
        const person = new Person({
            id: '1',
            vehicles: ['Bike', 'Car'],
            kmTraveled: '20000',
            from: '2022-01-01',
            to: '2022-02-01'
        })

        const result = person.formatted('pt-BR')

        const expected = {
            id: 1,
            vehicles: 'Bike e Car',
            kmTraveled: '20.000 km',
            from: '01 de janeiro de 2022',
            to: '01 de fevereiro de 2022'
        }

        expect(result).to.deep.equal(expected)
    })
})
