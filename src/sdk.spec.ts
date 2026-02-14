import { QDSystem } from ".";
import { BillingType } from "./api/models/BillingType";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { PacketType } from "./api/models/PacketType";
import { ProofOfDeliveryType } from "./api/models/ProofOfDeliveryType";
import { SdkPackagesCreationAttributes } from "./api/models/SdkPackagesCreationAttributes";
import { ShippingOption } from "./api/models/ShippingOption";

const tokenKey = "token"

describe('My app Info', () => {
  it('get my info', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    // Act
    const result = await qds.MyInfo()
    // Assert
    expect(result.name).toBe("test")
    expect(result.address).toBe("test")
  });


  it('throw get my info', async () => {
    // Arrange
    const qds = new QDSystem("")

    // Act + assert
    await expect(
      qds.MyInfo()
    ).rejects.toThrow('Login required: Authorization header missing or invalid.');
  });

});

describe('getTenantBranches', () => {
  it('get get Tenant Branches ', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)

    // Act
    const result = await qds.getTenantBranches()
    // Assert
    expect(result).toHaveLength(3);
  });
});


describe('GetList', () => {
  it('get my GetList', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)

    // Act
    const result = await qds.GetList(1, 10)
    // Assert
    expect(result).toHaveLength(10);
  });
});


describe('CompanyList', () => {
  it('get CompanyList in city', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    const cityId = 1

    // Act
    const result = await qds.getCompanyListOfCity(cityId)
    // Assert
    expect(result).toHaveLength(1);
  });
});

describe('GetPackageDetails', () => {
  it('get GetPackageDetails', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    const packageId = "a43f98a1-4a8a-4b90-956f-3279498fe58b"

    // Act
    const result = await qds.GetPackageDetails(packageId);

    // Assert
    expect(result.branchId).toEqual("ea9eae40-0985-4187-91ec-d90e0f739f53");
    expect(result.senderAddress).toEqual('456 Sender Ave');
    expect(result.recipientAddress).toEqual('123 Test Street');
    expect(result.recipientName).toEqual('Test Recipient');
    expect(result.recipientPhone).toEqual('0987654321');
    expect(result.recipientCityId).toEqual(1);
  });
});

describe('CalculateCost', () => {
  it('CalculateCost', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    const costParams: CalculateCostAttributes = {
      costId: 'ef14157c-b186-4c28-8a3c-61568b338874', // Replace with a valid cost ID
      branchId: 'ea9eae40-0985-4187-91ec-d90e0f739f53', // Replace with a valid branch ID
      recipientCityId: 1, // Replace with a valid city ID
      isExpress: false,
      isPickup: false
    };

    // Act
    const result = await qds.CalculateCost(costParams)

    // Assert
    expect(result.baseCost).toEqual("0.00");
    expect(result.currency).toEqual("USD");

    expect(result.details.currency).toEqual("USD");
    expect(result.details.id).toEqual("ef14157c-b186-4c28-8a3c-61568b338874");
    expect(result.details.type).toEqual(PacketType.PACKET);
    expect(result.details.modelV1).toEqual(true);
    expect(result.details.cityBaseCosts).toEqual(0);
    expect(result.details.taxRate).toEqual(0);

  });
});

describe('CreatePackage', () => {
  it('get my CreatePackage', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    const packagePayload: SdkPackagesCreationAttributes = {
      senderPhone: '1234567890',
      shippingOption: ShippingOption.EXPRESS,
      billingType: BillingType.NONE,
      proofOfDeliveryType: ProofOfDeliveryType.NONE,
      branchId: 'ea9eae40-0985-4187-91ec-d90e0f739f53', // Replace with a valid branch ID
      costId: 'ef14157c-b186-4c28-8a3c-61568b338874', // Replace with a valid cost ID
      recipientCityId: 1, // Replace with a valid city ID
      recipientAddress: '123 Test Street',
      recipientLng: 44.4,
      recipientLat: 33.3,
      senderName: 'Test Sender',
      senderAddress: '456 Sender Ave',
      senderEmail: 'sender@test.com',
      recipientEmail: 'recipient@test.com',
      type: PacketType.PACKET,
      recipientName: 'Test Recipient',
      recipientPhone: '0987654321',
      note: 'Test package from SDK',
      shippingCost: 10,
      packetCost: 50,
      showCostBox: true,
      isPaid: false,
      isPaidOnline: false,
      pickup: false,
      includeProducts: false,
      isTesting: true,
    };

    // Act
    const result = await qds.CreatePackage(packagePayload)

    // Assert
    expect(result.branchId).toEqual(packagePayload.branchId);
    expect(result.senderAddress).toEqual(packagePayload.senderAddress);
    expect(result.recipientAddress).toEqual(packagePayload.recipientAddress);
    expect(result.recipientName).toEqual(packagePayload.recipientName);
    expect(result.recipientPhone).toEqual(packagePayload.recipientPhone);
    expect(result.recipientCityId).toEqual(packagePayload.recipientCityId);
  });
});

describe('CheckBlackList', () => {
  it('get my CheckBlackList', async () => {
    // Arrange
    const qds = new QDSystem(tokenKey)
    const blacklistQuery: CheckBlackListAttribute = { phone: '1112223333' };
    // Act  Assert
    await expect(
      qds.CheckBlackList(blacklistQuery)
    ).rejects.toThrow('Data not found !!!.');
  });
});