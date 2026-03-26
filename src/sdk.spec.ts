import { QDSystem } from ".";
import { BillingType } from "./api/models/BillingType";
import { CalculateCostAttributes } from "./api/models/CalculateCostAttributes";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";
import { PacketType } from "./api/models/PacketType";
import { ProofOfDeliveryType } from "./api/models/ProofOfDeliveryType";
import { SdkPackagesCreationAttributes } from "./api/models/SdkPackagesCreationAttributes";
import { ShippingOption } from "./api/models/ShippingOption";

const tokenKey = "token";

describe("My app Info", () => {
  it("get my info", async () => {
    // Arrange
    const qds = new QDSystem(tokenKey);
    // Act
    const result = await qds.MyInfo();
    // Assert
  });

  it("throw get my info", async () => {
    // Arrange
    const qds = new QDSystem("");

    // Act + assert
    await expect(qds.MyInfo()).rejects.toThrow(
      "Login required: Authorization header missing or invalid.",
    );
  });
});

describe("getTenantBranches", () => {
  it("get get Tenant Branches ", async () => {
    // Arrange
    const qds = new QDSystem(tokenKey);

    // Act
    const result = await qds.getTenantBranches();
    // Assert
    expect(result).toHaveLength(3);
  });
});

describe("GetList", () => {
  it("get my GetList", async () => {
    // Arrange
    const qds = new QDSystem(tokenKey);

    // Act
    const result = await qds.GetList(1, 10);
    // Assert
    expect(result).toHaveLength(10);
  });
});

describe("CompanyList", () => {
  it("get CompanyList in city", async () => {
    // Arrange
    const qds = new QDSystem(tokenKey);
    const cityId = 1;

    // Act
    const result = await qds.getCompanyListOfCity(cityId);
    // Assert
    expect(result).toHaveLength(1);
  });
});

describe("CheckBlackList", () => {
  it("get my CheckBlackList", async () => {
    // Arrange
    const qds = new QDSystem(tokenKey);
    const blacklistQuery: CheckBlackListAttribute = { phone: "1112223333" };
    // Act  Assert
    await expect(qds.CheckBlackList(blacklistQuery)).rejects.toThrow(
      "Data not found !!!.",
    );
  });
});
