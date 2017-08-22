using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParcelModel.Exception;

namespace ParcelModel.Parcel
{
    public class ParcelFactory
    {
          public static ParcelEntity CreateParcel(ParcelType parcelType)
        {
            
            switch(parcelType)
            {
                case ParcelType.Large:
                    ParcelEntity largeParcel = new ParcelEntity();
                    largeParcel.Length = Constants.LARGE_LENGTH;
                    largeParcel.Breadth = Constants.LARGE_BREADTH;
                    largeParcel.Height = Constants.LARGE_HEIGHT;
                    largeParcel.Weight = Constants.MAX_WEIGHT;
                    largeParcel.Cost = Constants.LARGE_COST;
                    return largeParcel;
                case ParcelType.Medium:
                    ParcelEntity mediumParcel = new ParcelEntity();
                    mediumParcel.Length = Constants.MEDIUM_LENGTH;
                    mediumParcel.Breadth = Constants.MEDIUM_BREADTH;
                    mediumParcel.Height = Constants.MEDIUM_HEIGHT;
                    mediumParcel.Weight = Constants.MAX_WEIGHT;
                    mediumParcel.Cost = Constants.MEDIUM_COST;
                    return mediumParcel;
                case ParcelType.Small:
                    ParcelEntity smallParcel = new ParcelEntity();
                    smallParcel.Length = Constants.SMALL_LENGTH;
                    smallParcel.Breadth = Constants.SMALL_BREADTH;
                    smallParcel.Height = Constants.SMALL_HEIGHT;
                    smallParcel.Weight = Constants.MAX_WEIGHT;
                    smallParcel.Cost = Constants.SMALL_COST;
                    return smallParcel;
                default:
                    throw new InvalidParcelException("Invalid Parcel type");

            }

        }
    }
}
