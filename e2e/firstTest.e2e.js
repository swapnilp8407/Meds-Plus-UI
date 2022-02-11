describe('Swapnil', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Login screen to Home screen', async () => {
    await expect(element(by.id('login_screen'))).toBeVisible();
    await element(by.id('email')).typeText('test@example.com');
    await element(by.id('password')).typeText('123456');
    await element(by.id('submit')).tap();
    await expect(element(by.id('home_screen'))).toBeVisible();
    await element(by.id('nav_button')).tap();
    await expect(element(by.id('help_screen'))).toBeVisible();
    await element(by.id('nav_to_home')).tap();
    await expect(element(by.id('home_screen'))).toBeVisible();
  });
});
