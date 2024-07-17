

// import UserRepository from "@/src/database/repositories/user.repository";
// import UserModel from "@/src/database/models/user.model";
// import { NotFoundError } from "ms-libs/utils/errors";
// import { prettyObject } from "ms-libs/utils/logger";

// jest.mock("@/src/database/models/user.model");
// jest.mock("ms-libs/utils/logger");

// describe("UserRepository - deleteById", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("should delete a user by id and not return any error", async () => {
//     const userId = "60d5ec49c64d2b07f45b5e10";

//     (UserModel.findByIdAndDelete as jest.Mock).mockResolvedValue(true);

//     await expect(UserRepository.deleteById(userId)).resolves.not.toThrow();

//     expect(UserModel.findByIdAndDelete).toHaveBeenCalledWith(userId);
//   });

//   it("should throw NotFoundError if user is not found", async () => {
//     const userId = "60d5ec49c64d2b07f45b5e11";

//     (UserModel.findByIdAndDelete as jest.Mock).mockResolvedValue(null);

//     await expect(UserRepository.deleteById(userId)).rejects.toThrow(NotFoundError);

//     expect(UserModel.findByIdAndDelete).toHaveBeenCalledWith(userId);
//   });

//   it("should log error and rethrow it if an error occurs", async () => {
//     const userId = "60d5ec49c64d2b07f45b5e12";
//     const error = new Error("Something went wrong");

//     (UserModel.findByIdAndDelete as jest.Mock).mockRejectedValue(error);

//     await expect(UserRepository.deleteById(userId)).rejects.toThrow(error);

//     expect(UserModel.findByIdAndDelete).toHaveBeenCalledWith(userId);
//     expect(prettyObject).toHaveBeenCalledWith(error);
//   });
// });
