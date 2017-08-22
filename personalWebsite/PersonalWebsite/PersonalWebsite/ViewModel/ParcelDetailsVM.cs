using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ParcelModel;
using ParcelModel.Parcel;
using DotNetify;

namespace PersonalWebsite.ViewModel
{
    public class ParcelDetailsVM :BaseVM
    {
        public bool showError { get; set; } = false;
        public string errorMessage { get; set; } = "";

      public Int32 Length
        {   get => Get<int>();
            set
            {
                try
                {

                    Set<int>(Convert.ToInt32(value));
                   
                 }
                catch(InvalidCastException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }
                        }
        }


        public Int32 Breadth
        {
            get => Get<int>();
            set
            {
                try
                {

                    Set<int>(Convert.ToInt32(value));

                }
                catch (InvalidCastException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }
            }
        }

        public Int32 Height
        {
            get => Get<int>();
            set
            {
                try
                {

                    Set<int>(Convert.ToInt32(value));

                }
                catch (InvalidCastException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }
            }
        }

        public Int32 Weight
        {
            get => Get<int>();
            set
            {
                try
                {

                    Set<int>(Convert.ToInt32(value));

                }
                catch (InvalidCastException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }
            }
        }

       
        public Decimal Cost
        {
            get => Get<decimal>();

            set
            {

                InputParcel parcelOrder = new InputParcel()
                {

                    Length = Length,
                    Height = Height,
                    Breadth = Breadth,
                    Weight = Weight,
            };
                try
                {
                    var parcelService = new ParcelService();
                    ParcelEntity parcelType = parcelService.Identify(parcelOrder);

                    if (parcelType == null)
                    {
                        showError = true;
                        errorMessage ="We could not find a proper parcel type according to your input size and weight";
                        
                    }
                    else
                    {
                        Set<decimal>(parcelType.Cost);
                        showError = false;
                        errorMessage = "";

                    }
                    
                }
                catch(InvalidOperationException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }
                catch (ArgumentNullException e)
                {
                    showError = true;
                    errorMessage = e.Message;
                }


                Changed(nameof(errorMessage));
                Changed(nameof(showError));
                Changed(nameof(Cost));
               
            }
        }
        
    }
}
