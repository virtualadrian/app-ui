import { PortalLayoutModule } from './portal-layout.module';

describe('PortalLayoutModule', () => {
  let portalLayoutModule: PortalLayoutModule;

  beforeEach(() => {
    portalLayoutModule = new PortalLayoutModule();
  });

  it('should create an instance', () => {
    expect(portalLayoutModule).toBeTruthy();
  });
});
