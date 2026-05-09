import { QDSystem } from ".";
import { CheckBlackListAttribute } from "./api/models/CheckBlackListAttribute";

const tokenKey = "token";
const baseUrl = "http://localhost:2500/";

describe("My app Info", () => {
  it("get my info", async () => {
    // Arrange
    const qds = new QDSystem(baseUrl, tokenKey);
    // Act
    const result = await qds.MyInfo();
    // Assert
  });

  it("throw get my info", async () => {
    // Arrange
    const qds = new QDSystem(baseUrl, "");

    // Act + assert
    await expect(qds.MyInfo()).rejects.toThrow(
      "Login required: Authorization header missing or invalid.",
    );
  });
});

describe("getTenantBranches", () => {
  it("get get Tenant Branches ", async () => {
    // Arrange
    const qds = new QDSystem(baseUrl, tokenKey);

    // Act
    const result = await qds.getTenantBranches();
    // Assert
    expect(result).toHaveLength(3);
  });
});

describe("GetList", () => {
  it("get my GetList", async () => {
    // Arrange
    const qds = new QDSystem(baseUrl, tokenKey);

    // Act
    const result = await qds.GetList(1, 10);
    // Assert
    expect(result).toHaveLength(10);
  });
});

describe("CompanyList", () => {
  it("get CompanyList in city", async () => {
    // Arrange
    const qds = new QDSystem(baseUrl, tokenKey);
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
    const qds = new QDSystem(baseUrl, tokenKey);
    const blacklistQuery: CheckBlackListAttribute = { phone: "1112223333" };
    // Act  Assert
    await expect(qds.CheckBlackList(blacklistQuery)).rejects.toThrow(
      "Data not found !!!.",
    );
  });
});
