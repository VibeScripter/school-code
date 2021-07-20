using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double food_charge = double.Parse(textBox1.Text);
            double sales_tax = food_charge * 0.07;
            double tip = food_charge * 0.15;
            double total = food_charge + sales_tax + tip;
            label2.Text = "Food charge:..." + food_charge.ToString("c") + "\n" +
                          "\n7% Sales Tax:.." + sales_tax.ToString("c") + "\n" +
                          "\n15% Tip:......." + tip.ToString("c") + "\n" +
                          "\nTotal:........." + total.ToString("c");
        }
    }
}
