import BreadCrumb from "../components/Ui/bread-crumb";

export default function TermsAndConditions() {
    return (
        <>
            <BreadCrumb 
                pageTitle= "Terms and Conditions"
                breadCrumbBg= "/images/home/policies-breadcrunb.png"
            />

            <div className="container mx-auto pt-20 pb-5 flex flex-col md:flex-row justify-between gap-20">
                <div className="w-full">
                    <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
                    <ol className="list-decimal space-y-6 pl-6">
                        <li><span className="font-semibold">Acceptance of Terms</span><br />
                            By accessing or using the website www.indianippon.com , you agree to be bound by these Terms and Conditions, along with the Privacy Policy. If you do not agree with these terms, you are prohibited from using or accessing the Site. India Nippon Electricals Ltd  reserves the right to modify these Terms and Conditions at any time without prior notice. Any changes will be posted on this page, and your continued use of the Site constitutes your acceptance of these changes.</li>
                        
                        <li><span className="font-semibold">Use of the Site</span><br />
                            The content and information on the Site are provided for general informational purposes only. You agree to use the Site for lawful purposes and not for any illegal or unauthorized activities. You may not engage in any activity that may interfere with or disrupt the Site or its operations.</li>
                        
                        <li><span className="font-semibold">Intellectual Property</span><br />
                            All content on the Site, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of INEL or its content suppliers and is protected by applicable intellectual property laws. You may not use, copy, distribute, modify, or create derivative works of the content without explicit permission from INEL.</li>
                        
                        <li><span className="font-semibold">Product Information and Availability</span><br />
                            While INEL strives for accuracy, the information displayed on the Site may contain inaccuracies or errors. INEL does not guarantee the accuracy, completeness, or reliability of any information on the Site. INEL reserves the right to correct errors, omissions, or inaccuracies, and make changes to the content without prior notice.</li>
                        
                        <li><span className="font-semibold">Limitation of Liability</span><br />
                            INEL does not assume any responsibility or liability for the content, actions, or outcomes resulting from the use of the Site. By using the Site, you agree to do so at your own risk. INEL is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the Site.</li>
                        
                        <li><span className="font-semibold">External Links</span><br />
                            The Site may contain links to third-party websites. These links are provided for convenience, and INEL does not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites. Users should review the terms and privacy policies of third-party sites before engaging with them.</li>
                        
                        <li><span className="font-semibold">Privacy Policy</span><br />
                            Your use of the Site is also governed by INEL's Privacy Policy, which explains how your personal information is collected, used, and protected. By using the Site, you consent to the collection and use of your information as described in the Privacy Policy.</li>
                        
                        <li><span className="font-semibold">Termination of Access</span><br />
                            INEL reserves the right to suspend or terminate your access to the Site at any time, with or without cause, if it believes you have violated these Terms and Conditions.</li>
                        
                        <li><span className="font-semibold">Indemnity</span><br />
                            You agree to indemnify, defend, and hold INEL harmless from any claims, damages, losses, liabilities, costs, or expenses, including legal fees, arising from your use of the Site or violation of these Terms and Conditions.</li>
                        
                        <li><span className="font-semibold">Governing Law</span><br />
                            These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms and Conditions shall be resolved exclusively in the courts of India.</li>
                        
                        <li><span className="font-semibold">Modifications to the Terms</span><br />
                            INEL reserves the right to change or update these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page, and your continued use of the Site after any changes will constitute your acceptance of the new Terms and Conditions.</li>
                        
                        <li><span className="font-semibold">Contact Information</span><br />
                            If you have any questions, concerns, or suggestions regarding these Terms and Conditions, please contact us at:</li>

                        
                            <a href="mailto:inelcorp@inel.co.in" className="block "> Email: <span className="text-blue-500"> inelcorp@inel.co.in</span> </a>
                    </ol>
                </div>
            </div>
        </>
    )
}