/* eslint-disable max-lines-per-function */
const { expect } = require('chai');

const businessRules = require('../../service/businessRules');

  describe('Testing isQuadrilateral function', () => {
    it('Returns true when the four parameters complete a quadrilateral', () => {
      const response = businessRules.isQuadrilateral(2, 2, 2, 2);

      expect(response).equal(true);
    });

    it('Returns false when one of the sides are greater than sum of the other three', () => {
      const response = businessRules.isQuadrilateral(2, 10, 2, 2);

      expect(response).equal(false);
    });
  });
  
  describe('Testing area functions', () => {
    const wallsArray = [
      {
        height: 2,
        width: 2,
      },
      {
        height: 2,
        width: 2,
      },
      {
        height: 2,
        width: 2,
      },
      {
        height: 2,
        width: 2,
      },
    ];

    const openingObj = {
      windows: 2,
      doors: 2,
    };
    describe('Testing wallsArea function', () => {
      const TOTAL_WALLS_AREA = 16;

      it('Returns the area of the walls ', () => {
        const roomArea = businessRules.wallsArea(wallsArray);

        expect(roomArea).equal(TOTAL_WALLS_AREA);
      });
    });

    describe('Testing openingsArea function', () => {
      const TOTAL_OPENINGS_AREA = 7.04;

      it('Returns the area of the openings ', () => {
        const openingsArea = businessRules.openingsArea(openingObj);

        expect(openingsArea).equal(TOTAL_OPENINGS_AREA);
      });
    });

    describe('Testing validOpenings function', () => {
      const roomInfo = {
        walls: wallsArray,
        openings: openingObj,
        };
      const TOTAL_OPENINGS_AREA = 7.04;

      it('Returns the area of the openings ', () => {
        const roomArea = businessRules.validOpenings(roomInfo);

        expect(roomArea).equal(TOTAL_OPENINGS_AREA);
      });
    });
});

// describe('Testing businessRules functions', () => {
//   const payloadMovie = {
//     title: 'Example Movie',
//     directedBy: 'Jane Dow',
//     releaseYear: 1999,
//   };

//   describe('quando é inserido com sucesso', () => {
//     it('retorna um objeto', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.be.a('object');
//     });

//     it('tal objeto possui o "id" do novo filme inserido', async () => {
//       const response = await MoviesModel.create(payloadMovie);

//       expect(response).to.have.a.property('id');
//     });
//   });
// });