import HomePageLayout from "@/components/layouts/homePageLayout";
import WishListIsEmpty from "@/components/templates/wishList/WishListIsEmpty";
import WishListProducts from "@/components/templates/wishList/WishListProducts";
import WishListModel from "@/models/wishList";
import { authUser } from "@/utils/auth";
import connectToDB from "@/utils/db";

async function WishList() {
  connectToDB();
  const user = await authUser();
  let wishes = [];
  if (user) {
    wishes = await WishListModel.find(
      { userID: user._id },
      "-__v -createdAt -updatedAt"
    )
      .populate("productID", "image name price score")
      .lean();
  }

  return (
    <HomePageLayout>
      <div className="relative top-28">
        <h2 className="font-bold text-2xl md:mx-16 mx-4 border-b border-x-amber-800 py-4">
          لیست علاقه مندی ها
        </h2>
        {wishes.length !== 0 ? (
          <WishListProducts wishes={JSON.parse(JSON.stringify(wishes))} />
        ) : (
          <WishListIsEmpty />
        )}
      </div>
    </HomePageLayout>
  );
}

export default WishList;