import {<%= upCaseName %>Module} from './<%= name %>.module'

describe('<%= upCaseName %>', () => {

  beforeEach(window.module(<%= upCaseName %>Module));

  describe('with controller', () => {
    let controller, scope;

    beforeEach(inject(($rootScope, $componentController) => {
      scope = $rootScope.$new();
      controller = $componentController('<%= name %>', { $scope: scope });
    }));

    it ('should be attached to the scope', () => {
      expect(scope.$ctrl).to.eq(controller);
    });
  });
});
